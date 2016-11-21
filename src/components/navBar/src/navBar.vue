<template>
  <div class="nav-bar">
    <tree :data="data"></tree>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    props: {
      data: {
        type: Array
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less">
  .nav-bar {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 0;
    width: 250px;
    background-color: #00acc1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
