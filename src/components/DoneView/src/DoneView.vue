<template>
  <div>
    <!--<div v-for="menuTodo in todo.subTodoList">-->
    <!--<h4>#{{menuTodo.title}}</h4>-->
    <!--<todo-list v-for="todo in menuTodo.subTodoList"-->
    <!--:title="todo.title"-->
    <!--:todoList="todo.subTodoList"-->
    <!--defaultExpanded>-->
    <!--</todo-list>-->
    <!--</div>-->
    <menu-done-list v-for="menuTodo in todo.subTodoList" :menuTodo="menuTodo"></menu-done-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import MenuDoneList from './MenuDoneList.vue'
  export default {
    name: 'DoneView',
    components: {MenuDoneList},
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
