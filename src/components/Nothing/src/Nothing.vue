<template>
  <div class="wrapper">
    <div class="content">
      <slot>Todo已被清空...</slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Nothing'
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .horizontal-center() {
    margin-left: auto;
    margin-right: auto;
  }

  .wrapper {
    margin-top: 10%;
    text-align: center;
    .content {
      .horizontal-center;
      display: inline-block;
      padding: 20px 40px;
      border: 1px dashed #ccc;
      border-radius: 5px;
      color: #ccc;
      font-size: 14px;
      font-style: oblique;
    }
  }

</style>
