<template>
  <message-box title="添加任务" v-model="vModelValue" @ok="ok">
    <ac-input placeholder="请输入名称" v-model="title"></ac-input>
    <ac-input placeholder="请输入描述" v-model="description"></ac-input>
    <select v-model="targetTodo">
      <option v-for="(todo,index) in todos" value="index">{{todo.title}}</option>
    </select>
  </message-box>
</template>

<script>
  //todo
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'TaskAddBox',
    mixins: [mixin.default.ModelMixin],
    data(){
      return {
        title: '',
        description: '',
        targetTodo: this.todos && this.todos[0]
      }
    },
    computed: {
      todos(){
        return this.$store.state.todo.all
      }
    },
    methods: {
      ok(){
        let newTask = {
          title: this.title,
          description: this.description,
          type: this.type,
        }
        console.log(newTask)
//        this.$store.commit(this.$store.state.todo.types.ADD_PROJECT, newProject)
//        this.reset()
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
