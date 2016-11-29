<template>
  <message-box :show="show"
               title="确认">
    <slot></slot>
    <template slot="footer">
      <ac-button type="success" @click="handleYes">确定</ac-button>
      <ac-button @click="handleNo">取消</ac-button>
    </template>
  </message-box>
</template>

<script>
  import MessageBox from './messageBox.vue'
  export default {
    name: 'confirm',
    components: [MessageBox],
    props: {
      show: Boolean,
      message: String
    },
    methods: {
      handleYes(){
        this.$emit('EVENT_CONFIRM', true);
      },
      handleNo(){
        this.$emit('EVENT_CONFIRM', false);
      }
    }
  }
</script>

<style scoped>

</style>
