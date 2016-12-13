<template>
  <nav>
    <vertical-menu>
      <router-menu-item :data="menu_today"></router-menu-item>
      <router-menu-item :data="menu_tomorrow"></router-menu-item>
      <router-menu-item :data="menu_collection"></router-menu-item>
      <router-menu-item :data="menu_schedule"></router-menu-item>

      <router-menu-item v-for="menu_todo in menu_todos" :data="menu_todo">
        <menu-item-list>
          <router-menu-item v-for="todo in $store.getters[menu_todo.value]" :data="todo"></router-menu-item>
        </menu-item-list>
      </router-menu-item>

    </vertical-menu>
  </nav>
</template>

<script>
  import {mapGetters} from 'vuex'
  import RouterMenuItem from './routerMenuItem.vue'
  export default {
    name: 'navMenu',
    components: {RouterMenuItem},
    data(){
      return {
        menu_today: {
          title: '今日待办',
          path: '/filter/today',
          active: true
        },
        menu_tomorrow: {
          title: '明日待办',
          path: '/filter/tomorrow'
        },
        menu_collection: {
          title: '收集箱',
          path: '/filter/collection'
        },
        menu_schedule: {
          title: '日程',
          path: '/schedule'
        }
      }
    },
    computed: {
      menu_todos(){
        let origin = this.$store.state.todo.todoTypeMap,
          ret = [],
          type
        for (type in origin) {
          let typeMap = origin[type]
          ret.push({
            title: typeMap.text,
            value: typeMap.value,
            path: '/todo/' + typeMap.value
          })
        }
        return ret
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
