<template>
  <message-box :show="show"
               title="提示">

    <slot></slot>
    <input type="text" v-model="input">

    <template slot="footer">
      <ac-button type="success" @click="handleYes">确定</ac-button>
      <ac-button @click="handleNo">取消</ac-button>
    </template>

  </message-box>
</template>

<script>
  import MessageBox from './messageBox.vue'
  export default {
    name: 'prompt',
    components: [MessageBox],
    data(){
      return {
        input: ''
      }
    },
    props: {
      show: Boolean
    },
    methods: {
      handleYes(){
        this.$emit('EVENT_PROMPT', this.input);
      },
      handleNo(){
//        this.$emit('EVENT_PROMPT', input);
      }
    }
  }
</script>

<style scoped>

</style>
