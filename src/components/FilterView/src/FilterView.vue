<template>
  <div>
    <h3>{{filter.title}}</h3>
    <div v-if="allSubTodoList.length">
      <todo-list v-for="todo in todoList"
                 :title="todo.title"
                 :todoList="filter(todo.subTodoList)"
                 :defaultExpanded="true">
      </todo-list>
    </div>
    <nothing v-else></nothing>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FilterView',
    computed: {
      filter(){
        return this.$options.filters[this.$route.params.filter]
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
      },
      allSubTodoList(){
        let ret = []
        this.todoList.forEach((todo) =>
          {
            ret.push(...this.filter(todo.subTodoList))
          }
        )
        return ret
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
