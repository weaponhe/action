<template>
  <message-box title="新建" v-model="vModelValue" @ok="ok">
    <ac-input placeholder="请输入名称" v-model="title"></ac-input>
    <ac-input placeholder="请输入描述" v-model="description"></ac-input>
    <select>
      <option value="project">项目</option>
      <option value="book">书单</option>
      <option value="post">文章</option>
    </select>
  </message-box>
</template>

<script>
  //todo
  import mixin from 'action-ui/dist/mixin'
  console.log(mixin)
  export default {
    name: 'projectAddBox',
    mixins: [mixin.default.ModelMixin],
    data(){
      return {
        title: '',
        description: '',
        type: 'project'
      }
    },
    methods: {
      ok(){
        let newProject = {
          title: this.title,
          description: this.description,
          type: this.type,
        }
        this.$store.commit(this.$store.state.project.types.ADD_PROJECT, newProject)
        this.reset()
      },
      reset(){
        this.title = ''
        this.description = ''
        this.type = 'project'
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
