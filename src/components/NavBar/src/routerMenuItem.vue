<template>

  <router-link tag="div" :to="data.path" class="router-link">
    <a>
      <menu-item :data="data">
        <slot></slot>
      </menu-item>
    </a>
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
    box-sizing: border-box;
    transition: border-left 0.2s;
  }

  .router-link a {
    text-decoration: none;
    color: #333;
  }

  .router-link-active {
    border-left: 5px solid #4fc08d;
    a {
      color: #4fc08d !important;
    }
  }
</style>
