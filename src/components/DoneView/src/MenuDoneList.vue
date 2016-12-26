<template>
  <div v-if="!menuTodo.done && show">
    <todo-list :title="menuTodo.title"
               :todoList="menuTodo.subTodoList | done"
               defaultExpanded>
    </todo-list>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MenuDoneList',
    props: {menuTodo: Object},
    computed: {
      show(){
        let todoList = this.menuTodo.subTodoList
        return todoList.some(todo => todo.done)
      }
    }
  }
</script>

