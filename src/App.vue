<template>
  <div>
    <top-bar></top-bar>
    <nav-menu></nav-menu>
    <div class="main">
      <add-input></add-input>
      <div class="list">
        <item-list></item-list>
        <ac-button @click="test">添加项目</ac-button>
      </div>
    </div>
  </div>
</template>

<script>
  let index = 0
  export default {
    name: 'app',
    data(){
      return {
        show: true,
        alertShow: false,
        confirmShow: false,
        promptShow: false
      }
    },
    methods: {
      test(){
        this.$store.commit(this.$store.state.project.types.ADD_PROJECT, {
          title: "Title" + index++,
          type: 'project'
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
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
