<template>
  <div>
    <app-bar :fixed="true">
      <icon slot="left" name="account" :size="20"></icon>
      <div slot="right">
        <icon name="add" :size="20"></icon>
        <ac-button @click="showMainTodoBox=true">添加新任务</ac-button>
        <ac-button @click="showMenuTodoBox=true">添加菜单</ac-button>
      </div>
    </app-bar>
    <create-main-todo-box v-model="showMainTodoBox"></create-main-todo-box>
    <create-menu-todo-box v-model="showMenuTodoBox"></create-menu-todo-box>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
    data(){
      return {
        showMainTodoBox: false,
        showMenuTodoBox: false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
