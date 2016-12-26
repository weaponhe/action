<template>
  <div>
    <div class="todo">
      <router-link :to="{name:'todo',query:{path:todo.path}}">
        <h3 class="title">{{todo.title}}</h3>
      </router-link>
    </div>
    <todo-list
      :todoList="todo.subTodoList | unDone"
      :expandable="false">
    </todo-list>
    <nothing v-if="nothing"></nothing>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MenuTodoView',
    filters: {
      unDone(todoList){
        return todoList.filter(todo => !todo.done)
      }
    },
    computed: {
      path(){
        return this.$route.query.path
      },
      todo(){
        return this.$store.state.todo[this.path]
      },
      nothing(){
        return this.todo.subTodoList.every((todo) =>
        {
          return todo.done
        })
      }
    }
  }
</script>

