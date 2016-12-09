<template>
  <div>
    <top-bar></top-bar>
    <nav-menu></nav-menu>
    <div class="main">
      <ac-button @click="show=true">添加项目</ac-button>
      <!--<ac-input v-model="inputValue"></ac-input>-->
      <router-view></router-view>
    </div>

    <project-add-box v-model="show"></project-add-box>
  </div>
</template>

<script>
  let index = 0
  export default {
    name: 'app',
    data(){
      return {
        show: false,
        alertShow: false,
        confirmShow: false,
        promptShow: false,
        inputValue: 'test'
      }
    },
    watch: {
      inputValue(val){
        console.log(val)
      }
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
    .list {
      margin-top: 50px;
    }
  }
</style>
