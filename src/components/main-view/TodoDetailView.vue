<template>
  <div class="wrapper">
    <breadcrumb></breadcrumb>
    <div class="todo">
      <section class="header">
        <ac-checkbox></ac-checkbox>
        <h3 class="title">{{todo.title}}</h3>
      </section>
      <section class="content">
        <p class="description">{{todo.description}}</p>
      </section>
      <section class="footer">
        <ac-button @click="showSubTodoBox=true">添加</ac-button>
        <ac-button @click="">编辑</ac-button>
      </section>
    </div>

    <div class="todolist">
      <item-list :items="todo.subTodoList"></item-list>
    </div>

    <create-sub-todo-box v-model="showSubTodoBox"></create-sub-todo-box>
  </div>
</template>

<script>
  import Item from './Item.vue'
  import ItemList from './ItemList.vue'
  import Breadcrumb from './Breadcrumb.vue'
  import {findTodoWithPath} from '../../util'
  export default {
    name: 'TodoDetailView',
    components: {Item, ItemList, Breadcrumb},
    data(){
      return {
        showSubTodoBox: false,

      }
    },
    computed: {
      todo(){
        return this.$store.state.todo[this.$route.path]
      }
    },
    methods: {
      backward(){

      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .todo {
    position: relative;
    height: 30%;
    min-height: 200px;

    .header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      line-height: 60px;
      .title {
        display: inline;
        padding: 0 15px;
      }
    }

    .content {
      position: absolute;
      top: 60px;
      bottom: 60px;
      left: 0;
      width: 90%;
      overflow: auto;
      text-indent: 2em;
    }

    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60px;
      line-height: 60px;
      text-align: right;
    }
  }

  .todolist {
    height: 60%;
  }

</style>
