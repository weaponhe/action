<script type="text/ecmascript-6">
  export default {
    name: 'CreateMenuTodoBox',
    extends: require('./BaseTodoBox.vue'),
    data(){
      return {
        boxTitle: '新建菜单项'
      }
    },
    computed: {
      showSelect() {
        return false
      },
      showDate() {
        return false
      }
    },
    methods: {
      setPath(){
        this.path = '/todo'
      },
      setDate(){
        this.deadline = null
      }
    }
  }
</script>
