<template>
  <div>
    <message type="error" :open="openMessage">任务名冲突,请重新输入。</message>
    <message-box :title="boxTitle" v-model="vModelValue" @ok="ok">
      <ac-input placeholder="请输入名称" v-model="title"></ac-input>
      <ac-input placeholder="请输入描述" v-model="description"></ac-input>
      <input v-if="showDate" type="date" v-model="deadline"/>
      <ac-select v-if="showSelect" :options="todoList" v-model="path"></ac-select>
    </message-box>
  </div>
</template>

<script>
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'TodoBox',
    mixins: [mixin.ModelMixin],
    data(){
      return {
        boxTitle: '新建子任务',
        showSelect: true,
        showDate: true,
        openMessage: false,
        title: '',
        description: '',
        deadline: '',
        path: '',
      }
    },
    computed: {
      todoList(){
        return []
      },
      todo(){
        return this.$store.state.todo[this.$route.path]
      }
    },
    watch: {
      vModelValue(val){
        if (val) {
          this.reset()
        }
      }
    },
    methods: {
      ok(){

      },
      reset(){
        this.title = ''
        this.description = ''
        this.deadline = ''
        this.setPath()
      },
      setPath(){
        this.path = ''
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
