<template>
  <div class="todolist">
    <todo-list title="今日之前" :todoList="todo.subTodoList | beforeToday"></todo-list>
    <todo-list title="今日待办" :todoList="todo.subTodoList | today"></todo-list>
    <todo-list title="明日待办" :todoList="todo.subTodoList | tomorrow"></todo-list>
    <todo-list title="将来" :todoList="todo.subTodoList | future"></todo-list>
    <todo-list title="已完成" :todoList="todo.subTodoList | done"></todo-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import TodoList from './TodoList.vue'
  import {beforeToday, today, tomorrow, future, done} from '../../filters'
  export default {
    name: 'TodoListView',
    components: {TodoList},
    filters: {beforeToday, today, tomorrow, future, done},
    props: {
      todo: Object
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .todolist {
    margin-top: 30px;
  }
</style>
