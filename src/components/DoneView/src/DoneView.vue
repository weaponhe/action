<template>
  <div>
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

