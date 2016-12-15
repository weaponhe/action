<template>
  <div class="item"
       @click="selected = !selected"
       :class="{selected}">
    <ac-checkbox v-model="data.done"></ac-checkbox>
    <span class="time">{{data.deadline}}</span>
    <router-link :to="data.path"><span class="title">{{data.title}}</span></router-link>
    <span class="project">{{data.project}}</span>
  </div>
</template>

<script>
  export default {
    name: 'item',
    data() {
      return {
        selected: false
      }
    },
    props: {
      data: Object
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .item {
    margin: 0 10px;
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid #c0ccda;
    line-height: 50px;
    font-size: 20px;
    transition: background-color .2s cubic-bezier(.645, .045, .355, 1),
    color .2s cubic-bezier(.645, .045, .355, 1);

    &:hover {
      cursor: pointer;
      background-color: #f9fafc;
    }
    &.selected {
      background-color: #1f2f3d;
      color: #CCC;
    }
  }
</style>
