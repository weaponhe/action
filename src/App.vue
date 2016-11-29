<template>
  <div>
    <app-bar :fixed="true">
      <tooltip slot="left" content="left tooltip" direction="bottom">
        <icon name="account" :size="20"></icon>
      </tooltip>
      <tooltip slot="right">
        <icon name="add" :size="20"></icon>
      </tooltip>
    </app-bar>

    <nav>
      <vertical-menu :data="navTree"></vertical-menu>
    </nav>
    <div class="main">
      <ac-button @click="alertShow=true">Alert</ac-button>
      <ac-button @click="confirmShow=true">Confirm</ac-button>
      <ac-button @click="promptShow=true">Promot</ac-button>
    </div>
    <alert
      :show="alertShow"
      @ok="alertOK"
      @close="alertClose">
      警告
    </alert>
    <confirm
      :show="confirmShow"
      @ok="confirmOK"
      @close="confirmClose">
      请输入
    </confirm>
    <prompt
      :show="promptShow"
      @ok="promptOK"
      @close="promptClose">
      请输入
    </prompt>

  </div>
</template>

<script>
  let navTree = [
    {
      title: "item1",
      icon: "smile",
      children: [
        {
          title: "item1-1"
        }, {
          title: "item1-2",
          children: [
            {
              title: "item1-2-1",
              active: true
            },
            {
              title: "item1-2-2",
              active: true
            }
          ]
        }
      ]
    },
    {
      title: "item2",
      icon: "smile",
      children: [
        {
          title: "item2-1"
        }, {
          title: "item2-2",
          icon: "smile"
        }
      ]
    }, {
      title: "item3",
      icon: "smile",
      children: [
        {
          title: "item3-1"
        }, {
          title: "item3-2"
        }
      ]
    }
  ]
  export default {
    name: 'app',
    data(){
      return {
        navTree: navTree,
        show: true,
        alertShow: false,
        confirmShow: false,
        promptShow: false
      }
    },
    methods: {
      alertOK(){
        console.log('promptOK')
      },
      alertClose(){
        this.alertShow = false
      },
      confirmOK(){
        console.log('confirmOK')
      },
      confirmClose(){
        this.confirmShow = false
      },
      promptOK(res){
        console.log('promptOK', res)
      },
      promptClose(){
        this.promptShow = false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">


  nav {
    position: absolute;
    top: 56px;
    bottom: 0;
    left: 0;
    width: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .main {
    position: absolute;
    top: 56px;
    bottom: 0;
    left: 250px;
    right: 0;
    .left {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 50%;
    }
    .right {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 50%;
    }
  }
</style>
