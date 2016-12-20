<script type="text/ecmascript-6">
  export default {
    name: 'EditTodoBox',
    extends: require('./TodoBox.vue'),
    data(){
      return {
        boxTitle: '编辑任务'
      }
    },
    computed: {
      store(){
        return this.$store.state.todo
      },
      currentTodo(){
        let isTodoReg = /^\/todo/,
          path = this.$route.path
        return isTodoReg.test(path) ? path : ''
      },
      parentTodo(){
        return this.currentTodo.split('/').slice(0, -1).join('/')
      },
      grandTodo(){
        return this.parentTodo.split('/').slice(0, -1).join('/')
      },
      todoList(){
        if (this.store[this.grandTodo]) {
          return this.store[this.grandTodo].subTodoList.map((sub) => {
            return {text: sub.title, value: sub.path}
          })
        }
      },
      showDate(){
        return !!this.grandTodo
      },
      showSelect(){
        return !!this.grandTodo
      }
    },
    methods: {
      setTitle(){
        this.title = this.store[this.currentTodo].title
      },
      setDesc(){
        this.description = this.store[this.currentTodo].description
      },
      setDate(){
        this.deadline = this.store[this.currentTodo].deadline
      },
      setPath(){
        this.path = this.parentTodo
      },
      ok(){
        this.$store.commit(this.$store.state.todo.types.UPDATE_TODO, {
          newTodo: {
            title: this.title,
            description: this.description,
            path: this.path,
            deadline: this.deadline
          },
          oldTodo: this.todo
        })
      }
    }
  }
</script>
