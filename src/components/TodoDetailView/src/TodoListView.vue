<template>
    <div class="todolist">
        <div class="batch-option" v-if="activePaths.length">
            <ac-button @click="handleBatchOption">批量操作</ac-button>
        </div>
        <todo-list title="今日之前"
                   :todoList="todo.subTodoList | beforeToday"
                   :defaultExpanded="true"
                   @changeActiveState="changeActiveState"
                   :selectable="true">
        </todo-list>

        <todo-list title="今日待办"
                   :todoList="todo.subTodoList | today"
                   :defaultExpanded="true"
                   @changeActiveState="changeActiveState"
                   :selectable="true">
        </todo-list>

        <todo-list title="明日待办"
                   :todoList="todo.subTodoList | tomorrow"
                   @changeActiveState="changeActiveState"
                   :selectable="true">
        </todo-list>

        <todo-list title="将来"
                   :todoList="todo.subTodoList | future"
                   @changeActiveState="changeActiveState"
                   :selectable="true">
        </todo-list>

        <todo-list title="已完成"
                   :todoList="todo.subTodoList | done"
                   @changeActiveState="changeActiveState"
                   :selectable="true">
        </todo-list>

        <Patch-Todo-Box :todoPathList="activePaths" v-model="showPatchTodoBox"></Patch-Todo-Box>
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
        activePaths: [],
        showPatchTodoBox: false
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
        if (this.activePaths.length)
        {
          this.showPatchTodoBox = true
        }
        else {
          this.$Message.add({type: 'warning', text: '请选择至少一个任务。'})
        }
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
