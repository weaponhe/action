<template>
  <div>
    <item v-for="item in items" :data="item"></item>
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    name: 'itemList',
    components: {Item},
    props: {
      items: Array
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
