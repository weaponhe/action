<template>
  <div class="item"
       @click="handleSelect"
       :class="{selected}">
    <ac-checkbox size="small" v-model="data.done"></ac-checkbox>
    <router-link class="title" :to="data.path">{{data.title}}</router-link>
    <span>{{data.deadline}}</span>
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
    },
    methods: {
      handleSelect(){
        this.selected = !this.selected
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .item {
    padding: 0 10px;
    height: 40px;
    border-bottom: 1px solid #eee;
    line-height: 40px;
    font-size: 15px;
    transition: background-color .2s cubic-bezier(.645, .045, .355, 1),
    color .2s cubic-bezier(.645, .045, .355, 1);
    /*&:last-child{*/
    /*border-bottom: 1px solid #c0ccda;*/
    /*}*/
    &:hover {
      cursor: pointer;
      background-color: #f9fafc;
    }
    &.selected {
      background-color: #1f2f3d;
      color: #CCC;
    }

    .title {
      display: inline-block;
      height: 100%;
      padding: 0 20px;
    }
  }
</style>
