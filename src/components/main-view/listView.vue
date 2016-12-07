<template>
  <div>
    <item-list :items="items"></item-list>
  </div>
</template>

<script>
  export default {
    name: 'listView',
    props: {
      items: Array
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
