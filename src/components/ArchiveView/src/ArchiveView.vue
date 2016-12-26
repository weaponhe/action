<template>
  <div>
    <todo-list :todoList="todo.subTodoList | done" :expandable="false"></todo-list>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ArchiveView',
    computed: {
      todoPath(){
        return '/todo'
      },
      todo(){
        return this.$store.state.todo[this.todoPath]
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
