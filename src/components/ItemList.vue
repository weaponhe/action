<template>
  <div>
    <item v-for="item in items" :data="item"></item>
  </div>
</template>

<script>
  export default {
    name: 'itemList',
    props: {
      items: Array
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
