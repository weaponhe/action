<template>
    <div class="todolist">
        <div class="batch-option">
            <ac-button @click="handleBatchOption">批量操作</ac-button>
        </div>
        <todo-list title="今日之前"
                   :todoList="todo.subTodoList | beforeToday"
                   :defaultExpanded="true"
                   @changeActiveState="changeActiveState">
        </todo-list>

        <todo-list title="今日待办"
                   :todoList="todo.subTodoList | today"
                   :defaultExpanded="true"
                   @changeActiveState="changeActiveState">
        </todo-list>

        <todo-list title="明日待办"
                   :todoList="todo.subTodoList | tomorrow"
                   @changeActiveState="changeActiveState">
        </todo-list>

        <todo-list title="将来"
                   :todoList="todo.subTodoList | future"
                   @changeActiveState="changeActiveState">
        </todo-list>

        <todo-list title="已完成"
                   :todoList="todo.subTodoList | done"
                   @changeActiveState="changeActiveState">
        </todo-list>
    </div>
</template>

<script type="text/ecmascript-6">
  import TodoList from '../../TodoList'
  export default {
    name: 'TodoListView',
    components: {TodoList},
    props: {
      todo: Object
    },
    data(){
      return {
        activePaths: []
      }
    },
    methods: {
      changeActiveState(path){
        let index = this.activePaths.indexOf(path)
        index === -1 ?
          this.activePaths.push(path) :
          this.activePaths.splice(index, 1)
      },
      handleBatchOption(){
        console.log(this.activePaths)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .todolist {
        /*margin-top: 30px;*/
        .batch-option {
            float: right;
            /*text-align: right;*/
        }
    }
</style>
