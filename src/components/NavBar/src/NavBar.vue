<template>
  <nav>
    <vertical-menu :activeShow="false" router>
      <menu-item :title="menu_today.title" :path="menu_today.path"></menu-item>
      <menu-item :title="menu_tomorrow.title" :path="menu_tomorrow.path"></menu-item>

      <menu-group v-for="firstLevelTodo in todoList"
                  :title="firstLevelTodo.title"
                  :path="{name:'menu',query:{path:firstLevelTodo.path}}">

        <menu-item v-for="secondLevelTodo in firstLevelTodo.subTodoList"
                   :title="secondLevelTodo.title"
                   :path="{name:'todo',query:{path:secondLevelTodo.path}}">
        </menu-item>

      </menu-group>
    </vertical-menu>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data(){
      return {
        menu_today: {
          title: '今日待办',
          path: '/filter/today'
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
    border-right: 1px solid #ccc;
    background: #fafafa;
    padding-bottom: 2em;
  }

</style>
