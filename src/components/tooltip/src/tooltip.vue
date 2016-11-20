<template>
  <div class="tooltip">
       <!--@mouseenter="handleShowPopper"-->
       <!--@mouseleave="handleClosePopper">-->

    <div class="tooltip-rel" ref="reference">
      <slot></slot>
    </div>

    <div class="tooltip-popper"
         v-show="showPopper"
         ref="popper">
      <slot name="content">
        <div v-text="content"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tooltip',
    data(){
      return {
        showPopper: true
      }
    },
    props: {
      openDelay: {
        type: Number,
        default: 0
      },
      content: String
    },
    methods: {
      handleShowPopper(){
        this.timeout = setTimeout(() => {
          this.showPopper = true
        }, this.openDelay)
      },
      handleClosePopper(){
        clearTimeout(this.timeout)
        this.showPopper = false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .tooltip {
    display: inline-block;
  }

  .tooltip-rel {
    display: inline-block;
    position: relative;
  }

  .tooltip-popper {
    position: absolute;
    left: 100%;
    top:0;
  }

</style>
