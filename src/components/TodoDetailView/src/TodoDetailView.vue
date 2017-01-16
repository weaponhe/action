<template>
    <div class="wrapper" @keyup.enter="onEnter">
        <breadcrumb></breadcrumb>
        <div class="todo">
            <section class="header">
                <ac-checkbox v-model="done"></ac-checkbox>
                <h3 class="title">{{todo.title | decode}}</h3>
            </section>
            <section class="content">
                <p class="description">{{todo.description}}</p>
            </section>
            <section class="footer">
                <ac-button @click="showSubTodoBox=true">添加</ac-button>
                <ac-button @click="showEditTodoBox=true">编辑</ac-button>
                <ac-input placeholder="添加任务并回车"
                          v-model="inputContent" autofocus>
                </ac-input>
            </section>
        </div>

        <todo-list v-if="isMenu" :todoList="todo.subTodoList |undone" defaultExpanded></todo-list>
        <todo-list-view v-else :todo="todo"></todo-list-view>

        <create-sub-todo-box v-model="showSubTodoBox"></create-sub-todo-box>
        <edit-todo-box :todo="todo" v-model="showEditTodoBox"></edit-todo-box>

    </div>
</template>

<script type="text/ecmascript-6">

  import TodoListView from './TodoListView.vue'
  export default {
    name: 'TodoDetailView',
    components: {TodoListView},
    filters: {
      undone(todoList){
        return todoList.filter(todo => !todo.done)
      }
    },
    data(){
      return {
        showSubTodoBox: false,
        showEditTodoBox: false,
        inputContent: '',
      }
    },
    computed: {
      todo(){
        return this.$store.state.todo[this.$route.query.path]
      },
      isMenu(){
        let menuTodoReg = /^\/todo\/[^\/]+$/
        return menuTodoReg.test(this.todo.path)
      },
      done: {
        get(){
          return this.todo.done
        },
        set(val){
          if (val === this.todo.done)
            return
          //点击才执行
          //检测是否有未完成子任务
          if (val && this.todo.subTodoList.some(sub => sub.done === false))
          {
            this.$Message.add({type: 'error', text: '还有子任务未完成，请先完成子任务。'})
            return
          }
          let path = this.todo.path
          this.$store.commit(this.$store.state.todo.types.DONE_TODO, {
            path: path, done: val
          })
          if (val === false)
            return
          //返回父节点
          console.log(this.todo.path)
          let parentPath = path.split('/').slice(0, -1).join('/')
          if (parentPath === '/todo') {
            this.$router.replace('/')
          } else {
            this.$router.replace({name: 'todo', query: {path: parentPath}})
          }
        }
      }
    },
    methods: {
      dateFormat(date){
        let year  = date.getFullYear(),
            month = date.getMonth() + 1,
            day   = date.getDate()
        return [year,
          month < 10 ? '0' + month : month,
          day < 10 ? '0' + day : day].join('-')
      },
      onEnter(){
        let title = this.inputContent
        title     = encodeURIComponent(title)
        if (this.inputContent.trim())
        {
          if (this.$store.state.todo[this.todo.path + '/' + title]) {
            this.$Message.add({type: 'error', text: '任务名冲突，请重新输入。'})
          }
          else {
            let deadline = this.dateFormat(new Date())
            this.$store.commit(this.$store.state.todo.types.ADD_TODO, {
              title,
              deadline,
              path: this.todo.path
            })
            this.inputContent = ''
            this.$Message.add('创建成功。')
          }
        }
        else {
          this.$Message.add({type: 'error', text: '任务名不能为空，请重新输入。'})
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

    .todo {
        position: relative;
        height: 30%;
        min-height: 200px;
        margin-top: 20px;

        .header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            line-height: 60px;
            .title {
                display: inline;
                padding: 0 15px;
            }
        }

        .content {
            position: absolute;
            top: 60px;
            bottom: 60px;
            left: 0;
            width: 90%;
            overflow: auto;
            text-indent: 2em;
        }

        .footer {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: right;
        }
    }

</style>
