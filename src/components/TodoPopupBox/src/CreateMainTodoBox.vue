<script type="text/ecmascript-6">
  export default {
    name: 'CreateMainTodoBox',
    extends: require('./BaseTodoBox.vue'),
    data () {
      return {
        boxTitle: '新建任务'
      }
    },
    computed: {
      parentTodo(){
        //直接返回根todo
        return '/todo'
      }
    },
    methods: {
      setPath(){
        let parent = this.store[this.parentTodo]
        let targetTodo = parent.subTodoList.find(sub => {
          return sub.path === this.currentTodo
        })
        this.path = (targetTodo && targetTodo.path) || parent.subTodoList[0].path
      }
    }
  }
</script>
