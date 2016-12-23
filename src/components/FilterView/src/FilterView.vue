<template>
  <div>
    Fileter
    <todo-list v-for="todo in todoList"
               :title="todo.title"
               :todoList="filter(todo.subTodoList)"
               :expandable="false">
    </todo-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import {TimeFilter} from '../../../filter'
  export default {
    name: 'FilterView',
    filters: {...TimeFilter},
    computed: {
      filter(){
        return TimeFilter[this.$route.params.filter]
      },
      rootTodo(){
        return this.$store.state.todo['/todo']
      },
      todoList(){
        //use BFS to find the todoList
        let reg   = /^(\/[^\/]+){3}$/,
            queue = [this.rootTodo],
            todo

        while (queue.length) {
          todo = queue.shift()
          if (reg.test(todo.path)) {
            queue.unshift(todo)
            break
          } else {
            queue.push(...todo.subTodoList)
          }
        }
        return queue
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
