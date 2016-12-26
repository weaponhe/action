<template>
  <div v-if="!menuTodo.done && show">
    <h4>#{{menuTodo.title}}</h4>
    <todo-list v-for="todo in menuTodo.subTodoList"
               :title="todo.title"
               :todoList="todo.subTodoList | done"
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
        //只有当menuTodo.subTodoList.subTodoList|done
        return todoList.some(todo => todo.subTodoList.some(subTodo => subTodo.done))
      }
    }
  }
</script>

