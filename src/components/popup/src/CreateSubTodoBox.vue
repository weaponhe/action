<script type="text/ecmascript-6">
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'CreateSubTodoBox',
    extends: require('./TodoBox.vue'),
    data(){
      return {
        boxTitle: '新建子任务'
      }
    }
  }
</script>
