<template>
  <div>
    <ac-input placeholder="输入并回车，完成添加"
              size="large"
              v-model="input"></ac-input>
  </div>
</template>

<script>
  export default {
    name: 'addInput',
    data () {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
