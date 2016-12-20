<template>
  <div v-if="todoList && todoList.length"
       class="wrapper">
    <div class="header"
         @click="myUnfold = !myUnfold">
      <icon class="icon-arrow"
            :class="{unfold:myUnfold}"
            name="arrow-down-filling"
            :size="14"></icon>
      <span class="title">
        {{title}}
        <span class="number">({{todoList.length}})</span>
      </span>
    </div>
    <div v-show="myUnfold" class="content">
      <item v-for="todo in todoList" :data="todo"></item>
    </div>
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    name: 'TodoList',
    components: {Item},
    props: {
      title: String,
      todoList: Array,
      unfold: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        myUnfold: this.unfold
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .wrapper {
    margin: 40px 0;
    .header {
      color: #aaa;
      cursor: pointer;
      user-select: none;
      font-size: 14px;
      margin-bottom: 15px;
      &:hover {
        color: #888;
      }
      .icon-arrow {
        display: inline-block;
        margin-right: 5px;
        transform: rotate(-90deg);
      }
      .unfold.icon-arrow {
        transform: rotate(0deg);
      }
      .title {
        vertical-align: middle;
      }
    }
  }
</style>
