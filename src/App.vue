<template>
  <div>
    <app-bar :fixed="true">
      <tooltip  slot="left" content="left tooltip"><icon name="account"></icon></tooltip>
      <tooltip  slot="right"><icon name="add"></icon></tooltip>
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
