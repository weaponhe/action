<template>
  <div class="container">
    <div class="top">
      <top-bar></top-bar>
    </div>
    <div class="left">
      <nav-menu></nav-menu>
    </div>
    <div class="main-body">
      <!--<ac-button @click="show2=true">添加菜单项</ac-button>-->
      <!--<ac-button @click="show3=true">添加项目</ac-button>-->
      <!--<div class="router-view">-->
      <router-view></router-view>
      <!--</div>-->
    </div>

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

<style lang="less" rel="stylesheet/less">
  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #333;
    transition: color .1s;
    &:hover {
      text-decoration:underline;
      color:#4078c0;
    }
  }

  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    .top {

    }
    .left {
      overflow: scroll;
    }
    .main-body {
      position: absolute;
      top: 56px;
      bottom: 0;
      left: 250px;
      right: 0;
      padding: 10px 20px;
      overflow: auto;
    }
  }
</style>
