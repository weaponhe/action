<template>
  <div>
    <div class="todo">
      <router-link :to="path">
        <h3 class="title">{{todo.title}}</h3>
      </router-link>
    </div>
    <todo-list title="" :todoList="todo.subTodoList"></todo-list>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MenuTodoView',
    computed: {
      path(){
        return this.$route.query.path
      },
      todo(){
        return this.$store.state.todo[this.path]
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
