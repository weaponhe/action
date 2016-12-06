<template>
  <nav>
    <vertical-menu>
      <router-menu-item :data="menu_today"></router-menu-item>
      <router-menu-item :data="menu_tomorrow"></router-menu-item>
      <router-menu-item :data="menu_collection"></router-menu-item>
      <router-menu-item :data="menu_schedule"></router-menu-item>

      <router-menu-item :data="menu_project">
        <menu-item-list>
          <router-menu-item v-for="project in all_project" :data="project"></router-menu-item>
        </menu-item-list>
      </router-menu-item>

      <router-menu-item :data="menu_book">
        <menu-item-list>
          <router-menu-item v-for="book in all_book" :data="book"></router-menu-item>
        </menu-item-list>
      </router-menu-item>

      <router-menu-item :data="menu_post">
        <menu-item-list>
          <router-menu-item v-for="post in all_post" :data="post"></router-menu-item>
        </menu-item-list>
      </router-menu-item>

    </vertical-menu>
  </nav>
</template>

<script>
  import RouterMenuItem from './routerMenuItem.vue'
  export default {
    name: 'navMenu',
    components: {RouterMenuItem},
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
        menu_collection: {
          title: '收集箱',
          path: '/collection'
        },
        menu_schedule: {
          title: '日程',
          path: '/schedule'
        },
        menu_project: {
          title: '项目',
          path: '/project'
        },
        menu_book: {
          title: '书单',
          path: '/book'
        },
        menu_post: {
          title: '文章',
          path: '/post'
        }
      }
    },
    computed: {
      all_project(){
        return this.$store.getters.all_project
      },
      all_book(){
        return this.$store.getters.all_book
      },
      all_post(){
        return this.$store.getters.all_post
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
</style>
