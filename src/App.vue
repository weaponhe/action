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
      <div class="left">
        <ac-button type="success" @click="show=!show">message</ac-button>
        <ac-button type="success" @click="first=!first">first</ac-button>
        <ac-button type="success" @click="second=!second">second</ac-button>
        <ac-button type="success" @click="third=!third">third</ac-button>
        <ac-button type="success" @click="fourth=!fourth">fourth</ac-button>
      </div>
      <div class="right">
        <test :open="first"></test>
        <test :open="second"></test>
        <test :open="third"></test>
        <message type="warning" :open="show">啊实打实的按实际的冷空气我就看看千万</message>
      </div>
    </div>
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
        first: true,
        second: true,
        third: true,
        fourth: true
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  body {
    background: #ededed;
  }

  nav {
    position: fixed;
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
