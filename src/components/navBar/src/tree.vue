<template>
  <ul class="tree">
    <li v-for="item in data">
      <div>{{item.title}}</div>
      <tree :data="item.children"></tree>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'tree',
    props: {
      data: {
        type: Array
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less">

</style>
