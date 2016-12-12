<template>
  <message-box title="新建" v-model="vModelValue" @ok="ok">
    <ac-input placeholder="请输入名称" v-model="title"></ac-input>
    <ac-input placeholder="请输入描述" v-model="description"></ac-input>
    <ac-select :options="typeArray" v-model="type"></ac-select>
  </message-box>
</template>

<script>
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'projectAddBox',
    mixins: [mixin.default.ModelMixin],
    data(){
      return {
        title: '',
        description: '',
        type: '',
        typeArray: [
          {value: 'project', text: '项目'},
          {value: 'book', text: '书单'},
          {value: 'post', text: '文章'}
        ]
      }
    },
    created(){
      //后面改成根据页面变化而变化
      this.type = 'project'
    },
    methods: {
      ok(){
        console.log(this.type)
        let newProject = {
          title: this.title,
          description: this.description,
          type: this.type,
        }
        this.$store.commit(this.$store.state.todo.types.ADD_PROJECT, newProject)
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
