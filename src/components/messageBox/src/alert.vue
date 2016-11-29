<template>
  <message-box :show="show"
               title="警告"
               :closeIcon="false">
    <slot></slot>
  </message-box>
</template>

<script>
  import MessageBox from './messageBox.vue'
  export default {
    name: 'alert',
    components: [MessageBox],
    props: {
      show: Boolean
    }
  }
</script>

<style scoped>

</style>
