<template>
  <div>
    <app-bar :fixed="true">
      <tooltip slot="left" content="left tooltip" direction="bottom">
        <icon name="account"></icon>
      </tooltip>
      <tooltip slot="right">
        <icon name="add"></icon>
      </tooltip>
    </app-bar>

    <nav>
      <vertical-menu :data="navTree"></vertical-menu>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        navTree: [
          {
            title: "item1",
            icon:"smile",
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
            icon:"smile",
            children: [
              {
                title: "item2-1"
              }, {
                title: "item2-2",
                icon:"smile"
              }
            ]
          }, {
            title: "item3",
            icon:"smile",
            children: [
              {
                title: "item3-1"
              }, {
                title: "item3-2"
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  nav {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 0;
    width: 250px;
    background-color: #00acc1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
