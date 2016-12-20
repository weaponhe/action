<template>
  <div>
    <message type="error" :open="openMessage">任务名冲突,请重新输入。</message>
    <message-box :title="boxTitle" v-model="vModelValue" @ok="ok">
      <ac-input placeholder="请输入名称" v-model="title"></ac-input>
      <ac-input placeholder="请输入描述" v-model="description"></ac-input>
      <input v-if="showDate" type="date" v-model="deadline"/>
      <ac-select v-if="showSelect" :options="todoList" v-model="path"></ac-select>
    </message-box>
  </div>
</template>

<script type="text/ecmascript-6">
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'TodoBox',
    mixins: [mixin.ModelMixin],
    data(){
      return {
        boxTitle: '新建子任务',
        showSelect: true,
        showDate: true,
        openMessage: false,
        title: '',
        description: '',
        deadline: '',
        path: '',
      }
    },
    computed: {
      todoList(){
        return this.parentTodo.subTodoList.map((sub) => {
          return {text: sub.title, value: sub.path}
        })
      },
      parentTodo(){
        //todo页面则返回改todo的父节点,否则返回根todo
        let isTodoReg = /^\/todo/,
          todoStore = this.$store.state.todo,
          path = this.$route.path
        if (isTodoReg.test(path)) {
          let parentPath = path.split('/').slice(0, -1).join('/')
          return todoStore[parentPath]
        } else {
          return todoStore['/todo']
        }
      }
    },
    watch: {
      vModelValue(val){
        val && this.reset()
      }
    },
    methods: {
      reset(){
        this.setTitle()
        this.setDesc()
        this.setDate()
        this.setPath()
      },
      setTitle(){
        //默认设置为空
        this.title = ''
      },
      setDesc(){
        //默认设置为空
        this.description = ''
      },
      setDate(){
        //默认设置为今天的时间
        let date = new Date()
        this.deadline = date.getFullYear() + '-' +
          (date.getMonth() + 1) + '-' +
          date.getDate();
      },
      setPath(){
        //默认设置为和路径匹配的todo.path，如果找不到匹配，则设置为第一个todo.path
        let path = this.$route.path,
          defaultSelectedTodo = this.todoList.find(todo => todo.value === path)
        this.path = defaultSelectedTodo ? defaultSelectedTodo.value : this.todoList[0].value
      },
      ok(){
        if (!this.$store.state.todo[this.path + '/' + this.title]) {
          this.$store.commit(this.$store.state.todo.types.ADD_TODO, {
            title: this.title,
            description: this.description,
            path: this.path,
            deadline: this.deadline
          })
        }
        else {
          this.openMessage = true
          setTimeout(() => {
            this.openMessage = false
          }, 2000)
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
