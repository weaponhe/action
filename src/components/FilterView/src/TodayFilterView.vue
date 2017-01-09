<template>
    <div>
        <h3>{{title}}</h3>
        <div v-if="allSubTodoList.length">
            <todo-list v-for="todo in todoList"
                       :title="todo.title | decode"
                       :todoList="todo.subTodoList | todayOrBeforeToday"
                       :defaultExpanded="true">
            </todo-list>
        </div>
        <nothing v-else></nothing>
    </div>
</template>
<script type="text/ecmascript-6">
  import mixin from './mixin'
  export default {
    name: 'TodayFilterView',
    mixins: [mixin],
    data(){
      return {
        title: '今日待办'
      }
    },
    computed: {
      allSubTodoList(){
        let ret = []
        this.todoList.forEach((todo) =>
          {
            ret.push(...this.$options.filters['beforeToday'](todo.subTodoList))
          }
        )
        this.todoList.forEach((todo) =>
          {
            ret.push(...this.$options.filters['today'](todo.subTodoList))
          }
        )
        return ret
      }
    }
  }
</script>
