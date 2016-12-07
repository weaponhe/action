<template>
  <div>
    <top-bar></top-bar>
    <nav-menu></nav-menu>
    <div class="main">
        <ac-button @click="show=true">添加项目</ac-button>

      <!-- <add-input></add-input> -->
     <!--  <div class="list">
        <item-list></item-list>
      </div> -->
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
        promptShow: false
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
