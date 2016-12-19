<template>
  <div class="wrapper">
    <router-link v-if="parentTodoPath" :to="parentTodoPath"><ac-button @click="backward">后退</ac-button></router-link>
    <div class="todo">
      <h3>#{{todo.title}}</h3>
      <ac-button @click="showSubTodoBox=true">添加子TODO</ac-button>
    </div>
    <div class="todolist">
      <item-list :items="todo.subTodoList"></item-list>
    </div>
    <create-sub-todo-box v-model="showSubTodoBox"></create-sub-todo-box>
  </div>
</template>

<script>
  import ItemList from './ItemList.vue'
  import {findTodoWithPath} from '../../util'
  export default {
    name: 'TodoDetailView',
    components: {ItemList},
    data(){
      return {showSubTodoBox: false,

      }
    },
    computed: {
      todo(){
        return this.$store.state.todo[this.$route.path]
      },
      parentTodoPath(){
        let path = this.$route.path,
        res = path.split('/')
        if(res&&res.length>3){
          let ret = res.slice(0,-1).join('/')
          return ret
        }
        return ''
      }
    },
    methods:{
      backward(){
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .wrapper {
    height: 100%;
  }

  .todo {
    height: 30%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .todolist {
    height: 60%;
    overflow: auto;
  }
</style>
