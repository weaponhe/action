<template>
    <popup v-if="vModelValue"
           :open="vModelValue"
           modal
           @close="close">
    </popup>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixin'
  export default {
    name: 'BatchOptionPopup',
    mixins: [Mixin.ModelMixin],
    methods: {
      close(){
        this.vModelValue = false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
