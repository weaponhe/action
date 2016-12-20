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
        <ac-button @click="showEditTodoBox=true">编辑</ac-button>
        <ac-input placeholder="添加任务并回车"></ac-input>
      </section>
    </div>

    <todo-list-view :todo="todo"></todo-list-view>

    <create-sub-todo-box v-model="showSubTodoBox"></create-sub-todo-box>
    <edit-todo-box :todo="todo" v-model="showEditTodoBox"></edit-todo-box>
  </div>
</template>

<script>
  import TodoListView from './TodoListView.vue'
  import Breadcrumb from './Breadcrumb.vue'
  import {beforeToday, today, tomorrow, future, done} from '../../filters'
  export default {
    name: 'TodoDetailView',
    components: {TodoListView, Breadcrumb},
    filters: {beforeToday, today, tomorrow, future, done},
    data(){
      return {
        showSubTodoBox: false,
        showEditTodoBox: false
      }
    },
    computed: {
      todo(){
        return this.$store.state.todo[this.$route.path]
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .todo {
    position: relative;
    height: 30%;
    min-height: 200px;
    margin-top: 20px;

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
      text-align: right;
    }
  }

  .todolist {
    margin-top: 30px;
  }

</style>
