<template>
  <div class="wrapper" @keyup.enter="onEnter">
    <breadcrumb></breadcrumb>
    <div class="todo">
      <section class="header">
        <ac-checkbox v-model="done"></ac-checkbox>
        <h3 class="title">{{todo.title}}</h3>
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

    <todo-list-view :todo="todo"></todo-list-view>

    <create-sub-todo-box v-model="showSubTodoBox"></create-sub-todo-box>
    <edit-todo-box :todo="todo" v-model="showEditTodoBox"></edit-todo-box>

    <message type="error" :open="!!message">{{message}}</message>

  </div>
</template>

<script type="text/ecmascript-6">

  import TodoListView from './TodoListView.vue'
  export default {
    name: 'TodoDetailView',
    components: {TodoListView},
    data(){
      return {
        showSubTodoBox: false,
        showEditTodoBox: false,
        inputContent: '',
        message: ''
      }
    },
    computed: {
      todo(){
        return this.$store.state.todo[this.$route.query.path]
      },
      done: {
        get(){
          return this.todo.done
        },
        set(val){
          if (val === this.todo.done)
            return

          let path = this.todo.path
          this.$store.commit(this.$store.state.todo.types.DONE_TODO, {
            path: path, done: val
          })
          if (val === false)
            return
          //返回父节点
          let targetPath = '/'
          let parentPath = path.split('/').slice(0, -1).join('/')
          if (parentPath !== '/todo') {
            targetPath = parentPath
          }
          this.$router.replace({name: 'todo', query: {path: targetPath}})
        }
      }
    },
    methods: {
      onEnter(){
        let title = this.inputContent
        if
        (
          this.inputContent.trim())
        {
          if (this.$store.state.todo[this.todo.path + '/' + title]) {
            this.message = '任务名冲突，请重新输入。'
          } else {
            let today    = new Date()
            let deadline = [today.getFullYear(), today.getMonth() + 1, today.getDate()].join('-')
            this.$store.commit(this.$store.state.todo.types.ADD_TODO, {
              title,
              deadline,
              path: this.todo.path
            })
            this.inputContent = ''
          }
        }
        else {
          this.message = '任务名不能为空，请重新输入。'
        }
        this.message && setTimeout(() =>
        {
          this.message = ''
        }, 2000)
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

  .todolist {
    margin-top: 30px;
  }

</style>
