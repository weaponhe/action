<template>
    <div>
        <h3>{{title}}</h3>
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
    data(){
      return {
        title: '过滤器'
      }
    },
    computed: {
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
        return ret
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
