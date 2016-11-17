<template>
  <div>
    <app-bar :fixed="true">
      <div slot="left">左边</div>
      <div>标题</div>
      <div slot="right">右边</div>
    </app-bar>
    <div class="test"></div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .test{
    height: 1000px;
    background-color: red;
  }
</style>
