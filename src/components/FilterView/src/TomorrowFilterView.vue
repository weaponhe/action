<template>
    <div>
        <h3>{{title}}</h3>
        <div v-if="allSubTodoList.length">
            <todo-list v-for="todo in todoList"
                       :title="todo.title"
                       :todoList="todo.subTodoList | tomorrow"
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
        title: '明日待办'
      }
    },
    computed: {
      allSubTodoList(){
        let ret = []
        this.todoList.forEach((todo) =>
          {
            ret.push(...this.$options.filters.tomorrow(todo.subTodoList))
          }
        )
        return ret
      }
    }
  }
</script>
