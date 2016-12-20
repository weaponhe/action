<script type="text/ecmascript-6">
  export default {
    name: 'CreateMainTodoBox',
    extends: require('./TodoBox.vue'),
    data () {
      return {
        boxTitle: '新建任务'
      }
    },
    computed: {
      parentTodo(){
        //直接返回根todo
        return this.$store.state.todo['/todo']
      }
    }
  }
</script>
