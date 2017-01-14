<template>
    <ac-mask v-model="vModelValue">
    </ac-mask>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixin'
  export default {
    name: 'BatchOptionPopup',
    mixins: [Mixin.ModelMixin]
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
