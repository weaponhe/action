<template>
  <div>
    <top-bar></top-bar>
    <nav-menu></nav-menu>
    <div class="main">
      <ac-button @click="show1=true">添加子TODO</ac-button>
      <ac-button @click="show2=true">添加菜单项</ac-button>
      <ac-button @click="show3=true">添加项目</ac-button>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>

    <create-sub-todo-box v-model="show1"></create-sub-todo-box>
    <create-menu-todo-box v-model="show2"></create-menu-todo-box>
    <create-main-todo-box v-model="show3"></create-main-todo-box>
  </div>
</template>

<script>
  let index = 0
  export default {
    name: 'app',
    data(){
      return {
        show1: false,
        show2: false,
        show3: false,
        showTaskAddBox: false,
        alertShow: false,
        confirmShow: false,
        promptShow: false,
        inputValue: 'test',
        checkValue: true,
        selectArray: [
          {value: 'project', text: 'a'},
          {value: 'post', text: 'b'},
          {value: 'book', text: 'c'}
        ],
        selectedValue: ''
      }
    },
    created(){
      this.selectedValue = this.selectArray[2].value
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  body {
    margin: 0;
    padding: 0;
  }

  .main {
    position: absolute;
    top: 56px;
    bottom: 0;
    left: 250px;
    right: 0;
    padding: 10px 20px;
    .content-wrapper {
      height: 100%;
    }
  }
</style>
