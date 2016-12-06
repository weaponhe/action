<template>
  <nav>
    <vertical-menu>
      <menu-item :data="menu_today" vueRouter></menu-item>
      <menu-item :data="menu_tomorrow" vueRouter></menu-item>
      <menu-item :data="menu_collection" vueRouter></menu-item>
      <menu-item :data="menu_schedule" vueRouter></menu-item>
      <menu-item :data="menu_project" vueRouter></menu-item>
    </vertical-menu>
  </nav>
</template>

<script>

  export default {
    name: 'navMenu',
    data(){
      return {
        menu_today: {
          title: '今日待办',
          path: '/today',
          active: true
        },
        menu_tomorrow: {
          title: '明日待办',
          path: '/tomorrow'
        },
        menu_collection : {
          title: '收集箱',
          path: 'collection'
        },
        menu_schedule :{
          title: '日程',
          path: 'schedule'
        },
        menu_project : {
          title: '项目',
          path: 'project'
        },
        menu_book : {
          title: '书单',
          path: 'book'
        },
        menu_post : {
          title: '文章',
          path: 'post'
        }
      }
    },
    computed: {

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
</style>
