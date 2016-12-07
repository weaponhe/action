<template>
  <router-link :to="data.path" class="router-link">
    <menu-item :data="data">
      <slot></slot>
    </menu-item>
  </router-link>
</template>

<script>
  export default {
    name: 'routerMenuItem',
    props: {
      data: Object
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .router-link {
    text-decoration: none;
    color: #CCC;
  }
</style>
