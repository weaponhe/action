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

    <nav-bar :data="navTree"></nav-bar>
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
            children: [
              {
                title: "item1-1"
              }, {
                title: "item1-2"
              }
            ]
          },
          {
            title: "item2",
            children: [
              {
                title: "item2-1"
              }, {
                title: "item2-2"
              }
            ]
          }, {
            title: "item3",
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

</style>
