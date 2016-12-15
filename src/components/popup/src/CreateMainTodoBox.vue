<script>
  export default {
    name: 'CreateMainTodoBox',
    extends: require('./CreateSubTodoBox.vue'),
    data () {
      return {
        boxTitle: '新建任务',
      }
    },
    computed: {
      todoList(){
        let ret = [],
          inbox = this.$store.state.todo['/todo/收集箱'],
          todo = this.$store.state.todo['/todo/工作区']

        ret.push({text: inbox.title, value: inbox.path})
        todo.subTodoList.forEach((sub) => {
          ret.push({text: sub.title, value: sub.path})
        })
        return ret
      }
    }
  }
</script>
