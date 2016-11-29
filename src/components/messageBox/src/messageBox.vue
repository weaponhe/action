<template>
  <transition>
    <popup :open="show" modal>
      <div class="wrapper">

        <div class="header">
          <slot name="header">
            <h3 class="clearfix">
              <span class="title">{{title}}</span>
              <span v-if="closeIcon" class="close"><icon name="error" :size="20"></icon></span>
            </h3>
          </slot>
        </div>

        <div class="main">
          <slot>
          </slot>
        </div>

        <div class="footer">
          <slot name="footer">
            <ac-button type="success">确定</ac-button>
          </slot>
        </div>

      </div>
    </popup>
  </transition>
</template>

<script>
  import popup from '../../popup'
  import icon from '../../icon'
  import acButton from '../../button'
  export default {
    name: 'messageBox',
    components: [popup, icon, acButton],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: String,
      closeIcon: {
        type: Boolean,
        default: true
      }
    },
    methods: {}
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .wrapper {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 70%;
    max-width: 700px;
    background-color: #FFF;

    .header {
      margin: 20px 0;
      padding: 0 20px;
      .title {
        float: left;
        color: #42b983;
      }
      .close {
        float: right;
        cursor: pointer;
        &:hover {
          color: #999;
        }
      }
    }

    .main {
      margin: 20px 0;
      padding: 0 20px;
    }

    .footer {
      padding: 20px;
      text-align: right;
    }
  }
</style>
