<script type="text/ecmascript-6">
  export default {
    name: 'CreateMenuTodoBox',
    extends: require('./TodoBox.vue'),
    data(){
      return {
        boxTitle: '新建菜单项',
        showSelect: false,
        showDate:false
      }
    },
    methods: {
      setPath(){
        this.path = '/todo'
      }
    }
  }
</script>
