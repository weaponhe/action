<template>
    <div class="wrapper">
        <app-bar :fixed="true">
            <div slot="left">
                <icon name="add" :size="20" @click="showMainTodoBox=true"></icon>
            </div>
            <div slot="right">
                <icon name="account" :size="20" @click="showMenuTodoBox=true"></icon>
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
    .wrapper {
        position: relative;
        z-index: 1;
    }
</style>
