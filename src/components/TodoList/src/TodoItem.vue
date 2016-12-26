<template>
  <div class="todo"
       :class="{done:todo.done}">
    <ac-checkbox size="small" v-model="done" :title="todo.title"></ac-checkbox>
    <router-link class="title"
                 :to="{name:'todo',query:{path:todo.path}}"
                 exact>
      {{todo.title}}
    </router-link>
    <span class="count">{{todos||''}}</span>
  </div>
</template>

<script>
  export default {
    name: 'item',
    props: {
      todo: Object
    },
    computed: {
      done: {
        get(){
          return this.todo.done
        },
        set(val){
          this.$store.commit(this.$store.state.todo.types.DONE_TODO, {
            path: this.todo.path, done: val
          })
        }
      },
      todos(){
        return this.todo.subTodoList.reduce(function (count, subTodo)
        {
          return count + (
              subTodo.done ? 0 : 1)
        }, 0)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .todo {
    height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
    line-height: 40px;
    font-size: 15px;
    transition: background-color .2s cubic-bezier(.645, .045, .355, 1),
    color .2s cubic-bezier(.645, .045, .355, 1);

    &:hover {
      background-color: #f9fafc;
    }

    .title {
      padding: 0 20px;
      color: inherit;
    }
    &.done {
      color: #ccc;
      .title {
        text-decoration: line-through;
      }
    }
    .count {
      float: right;
      margin-right: 1em;
    }
  }
</style>
