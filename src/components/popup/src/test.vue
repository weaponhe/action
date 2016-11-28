<template>
  <popup :open="open" modal>
    <div class="content">
      <ac-button type="primary">关闭</ac-button>
    </div>
  </popup>
</template>

<script>
  export default {
    name: 'test',
    props: {
      open: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 50%;
    height: 50%;
    margin: 0 auto;
    background-color: #FFF;
  }
</style>
