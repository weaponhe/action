export default {
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
    }
  }
}
