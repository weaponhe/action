<template>
    <div class="container">
        <top-bar></top-bar>
        <nav-bar></nav-bar>
        <div class="main-body">
            <!--<ac-button @click="show=true">Mask</ac-button>-->
            <!--<ac-mask v-model="show"></ac-mask>-->

            <!--<ac-button @click="showMessageBox=true">MessageBox</ac-button>-->
            <!--<message-box v-model="showMessageBox"></message-box>-->

            <div class="router-view">
            <router-view></router-view>
            </div>
        </div>
        <message></message>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        show: false,
        showMessageBox: false
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    body {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        /*color: #333;*/
        transition: color .1s cubic-bezier(.645, .045, .355, 1);
    }

    .container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        .main-body {
            position: absolute;
            top: 56px;
            bottom: 0;
            left: 250px;
            right: 0;
            padding: 0 20px 20px 20px;
            overflow: auto;
        }
    }
</style>
