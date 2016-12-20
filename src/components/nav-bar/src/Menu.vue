<template>
  <nav>
    <vertical-menu :activeShow="false">
      <router-menu-item :data="menu_today"></router-menu-item>
      <router-menu-item :data="menu_tomorrow"></router-menu-item>
      <router-menu-item :data="menu_schedule"></router-menu-item>

      <!--<router-menu-item :data="inbox"></router-menu-item>-->

      <router-menu-item v-for="firstLevelTodo in todoList"
                        :data="firstLevelTodo">
        <!--<menu-item-list>-->
          <!--<router-menu-item v-for="secondLevelTodo in firstLevelTodo.subTodoList"-->
                            <!--:data="secondLevelTodo"></router-menu-item>-->
        <!--</menu-item-list>-->
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
        menu_schedule: {
          title: '日程',
          path: '/schedule'
        }
      }
    },
    computed: {
      todoList(){
        return this.$store.state.todo['/todo'].subTodoList
      },
//      inbox(){
//        return this.$store.state.todo['/todo/收集箱']
//      },
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
    border-right: 1px solid #ccc;
    background: #fafafa;
  }

</style>
