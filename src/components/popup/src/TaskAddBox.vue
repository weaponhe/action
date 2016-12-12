<template>
  <message-box title="添加任务" v-model="vModelValue" @ok="ok">
    <ac-input placeholder="请输入名称" v-model="title"></ac-input>
    <ac-input placeholder="请输入描述" v-model="description"></ac-input>
    <ac-select :options="todos" v-model="selectedTodo"></ac-select>
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
        targetTodo: this.todos && this.todos[0],
        selectedTodo: ''
      }
    },
    computed: {
      todos(){
        return this.$store.state.todo.all.map((todo) => {
          return {value: todo.title, text: todo.title}
        })
      }
    },
    created(){
      //后面改为根据页面变化而变化
      this.selectedTodo = this.todos[0].value
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
