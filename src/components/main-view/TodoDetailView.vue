<template>
  <div class="wrapper">
    <div class="todo-wrapper"><h3>#{{todo.title}}</h3></div>
    <div class="todolist-wrapper">
      <item-list :items="todo.subTodoList"></item-list>
    </div>
  </div>
</template>

<script>
  import ItemList from './ItemList.vue'
  import {findTodoWithPath} from '../../util'
  export default {
    name: 'TodoDetailView',
    components: {ItemList},
    computed: {
      todo(){
        return this.$store.state.todo[this.$route.path]
      },
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .wrapper {
    height: 100%;
  }

  .todo-wrapper {
    height: 30%;
    /*background: red;*/
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .todolist-wrapper {
    height: 70%;
    /*background: green;*/
  }
</style>
