
<script>
  export default {
    name: 'EditTodoBox',
    extends: require('./TodoBox.vue'),
    computed:{
      isMainTodo() {
      },
      showDate(){

      }
    },
    methods: {
      reset(){
        this.title = this.todo.title
        this.description = this.todo.description
        this.deadline = this.todo.deadline
      },
      setPath(){
        this.path = this.todo.path
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
