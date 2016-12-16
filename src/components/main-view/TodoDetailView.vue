<template>
  <div class="wrapper">
    <div class="todo">
      <h3>#{{todo.title}}</h3>
      <ac-button @click="show=true">添加子TODO</ac-button>
    </div>
    <div class="todolist">
      <item-list :items="todo.subTodoList"></item-list>
    </div>
    <create-sub-todo-box v-model="show"></create-sub-todo-box>
  </div>
</template>

<script>
  import ItemList from './ItemList.vue'
  import {findTodoWithPath} from '../../util'
  export default {
    name: 'TodoDetailView',
    components: {ItemList},
    data(){
      return {show: false}
    },
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

  .todo {
    height: 30%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .todolist {
    height: 60%;
    overflow: auto;
  }
</style>
