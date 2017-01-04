<script type="text/ecmascript-6">
  export default {
    name: 'EditTodoBox',
    extends: require('./BaseTodoBox.vue'),
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
            path      = this.$route.query.path
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
          return this.store[this.grandTodo].subTodoList.map((sub) =>
          {
            return {text: decodeURIComponent(sub.title), value: sub.path}
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
        this.title = decodeURIComponent(this.store[this.currentTodo].title)
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
        if (this.validateEmpty()) {
          //检测是否更改了path,
          if (this.parentTodo === this.path) {
            console.log('same')
            this.$store.commit(this.store.types.UPDATE_TODO, {
              newTodo: {
                title: this.encodedTitle,
                description: this.description,
                path: this.path,
                deadline: this.deadline
              },
              oldTodo: this.store[this.currentTodo]
            })
            this.vModelValue = false
            this.$router.replace({name: 'todo', query: {path: this.parentTodo + '/' + this.encodedTitle}})
          } else {
            console.log('changed')
            if (this.validateDuplicate()) {
              this.$store.commit(this.store.types.MOVE_TODO, {
                newTodo: {
                  title: this.encodedTitle,
                  description: this.description,
                  path: this.path,
                  deadline: this.deadline
                },
                oldTodo: this.store[this.currentTodo]
              })
              this.vModelValue = false
              this.$router.replace({name: 'todo', query: {path: this.parentTodo}})
            }
          }
        }
      }
    }
  }
</script>
