<script>
  export default {
    name: 'CreateMenuTodoBox',
    extends: require('./CreateSubTodoBox.vue'),
    data(){
      return {
        boxTitle: '新建菜单项',
        showSelect: false,
      }
    },
    methods: {
      setPath(){
        this.path = '/todo/工作区'
      }
    }
  }
</script>
