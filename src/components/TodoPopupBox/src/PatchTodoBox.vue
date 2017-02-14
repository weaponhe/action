<script type="text/ecmascript-6">
  export default {
    name: 'PatchTodoBox',
    extends: require('./BaseTodoBox.vue'),
    props: {todoPathList: Array},
    data(){
      return {
        boxTitle: '批量编辑任务'
      }
    },
    computed: {
      showTitle(){
        return false
      },
      showDesc(){
        return false
      },
      showSelect(){
        return false
      },
    },
    methods: {
      ok(){
        let todo, parentTodo
        this.todoPathList.forEach((todo) =>
        {
          parentTodo = todo.split('/').slice(0, -1).join('/')
          //检测是否更改了path,
          if (parentTodo === this.path) {
            this.$store.commit(this.store.types.UPDATE_TODO, {
              newTodo: {
                deadline: this.deadline
              },
              oldTodo: this.$store.state.todo[todo]
            })
            this.vModelValue = false
          }
        })
        this.$Message.add('修改成功。')
      }
    }
  }
</script>
