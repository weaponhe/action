<template>
  <div class="todo"
       :class="{done:todo.done}">
    <ac-checkbox size="small" v-model="todo.done" :title="todo.title"></ac-checkbox>
    <router-link class="title"
                 :to="todo.path">
      {{todo.title}}
    </router-link>
    <span>@{{todo.deadline}}</span>
  </div>
</template>

<script>
  export default {
    name: 'item',
    data(){
      return {
        done: this.todo.done
      }
    },
    props: {
      todo: Object
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
  }
</style>
