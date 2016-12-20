<script type="text/ecmascript-6">
  export default {
    name: 'EditTodoBox',
    extends: require('./TodoBox.vue'),
    computed: {
      todo(){
        return this.$store.state.todo[this.$route.path]
      },
      showDate(){
        return this.parentTodo !== this.$store.state.todo['/todo']
      },
      showSelect(){
        return this.parentTodo !== this.$store.state.todo['/todo']
      }
    },
    methods: {
      setTitle(){
        this.title = this.todo.title
      },
      setDesc(){
        this.description = this.todo.description
      },
      setDate(){
        this.deadline = this.todo.deadline
      },
      setPath(){
        this.path = this.todo.path
      },
      ok(){
        console.log(this.title, this.description, this.deadline, this.path)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
