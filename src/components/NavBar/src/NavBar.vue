<template>
    <nav>
        <v-menu router>
            <v-menu-item :title="menu_today.title" :path="menu_today.path"></v-menu-item>
            <v-menu-item :title="menu_tomorrow.title" :path="menu_tomorrow.path"></v-menu-item>

            <v-menu-group v-for="firstLevelTodo in todoList"
                          v-if="!firstLevelTodo.done"
                          :title="firstLevelTodo.title"
                          :path="{name:'todo',query:{path:firstLevelTodo.path}}"
                          :expandable="expandable(firstLevelTodo)">

                <v-menu-item v-for="secondLevelTodo in firstLevelTodo.subTodoList"
                             v-if="!secondLevelTodo.done"
                             :title="secondLevelTodo.title"
                             :path="{name:'todo',query:{path:secondLevelTodo.path}}">
                </v-menu-item>

            </v-menu-group>

            <v-menu-group :title="menu_history.title">
                <v-menu-item :title="menu_done.title" :path="menu_done.path"></v-menu-item>
                <v-menu-item :title="menu_archive.title" :path="menu_archive.path"></v-menu-item>
            </v-menu-group>
        </v-menu>
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
        },
        menu_history: {
          title: '时光机'
        },
        menu_archive: {
          title: '已归档',
          path: '/history/archive'
        },
        menu_done: {
          title: '已完成',
          path: '/history/done'
        }
      }
    },
    computed: {
      todoList(){
        return this.$store.state.todo['/todo'].subTodoList
      }
    },
    methods: {
      expandable(todo)
      {
        return todo.subTodoList.some(subTodo => !subTodo.done)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    nav {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 250px;
        border-right: 1px solid #ccc;
        background: #fafafa;
        padding: 56px 0 20px;
    }

</style>
