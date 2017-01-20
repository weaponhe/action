<template>
    <div v-if="show"
         class="wrapper">
        <div class="header"
             :class="expandable?'clickable':'unclickable'"
             @click="handleClick">
            <icon class="icon-arrow"
                  :class="{expanded:expanded}"
                  name="arrow-down-filling"
                  :size="14"></icon>
            <span class="title">
        {{title}}
        <span class="number">({{todoList.length}})</span>
      </span>
        </div>
        <div v-show="expanded" class="content">
            <item v-for="todo in todoList"
                  :key="todo.path"
                  :todo="todo"
                  :selectable="selectable"
                  @changeActiveState="changeActiveState"></item>
        </div>
    </div>
</template>

<script>
  import Item from './TodoItem.vue'
  export default {
    name: 'TodoList',
    components: {Item},
    props: {
      title: String,
      todoList: Array,
      expandable: {
        type: Boolean,
        default: true
      },
      defaultExpanded: {
        type: Boolean,
        default: false
      },
      selectable: {
        type: Boolean
      }
    },
    data(){
      return {
        expanded: !this.expandable || this.defaultExpanded
      }
    },
    computed: {
      show(){
        return this.todoList && this.todoList.length
      }
    },
    methods: {
      handleClick(){
        if (this.expandable) {
          this.expanded = !this.expanded
        }
      },
      changeActiveState(path){
        this.$emit('changeActiveState', path)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .clickable() {
        cursor: pointer;
        user-select: none;
    }

    .unclickable() {
        cursor: not-allowed;
        user-select: none;
    }

    .wrapper {
        margin: 40px 0;

        .header {
            &.clickable {
                .clickable;
                &:hover {
                    color: #888;
                }
            }
            &.unclickable {
                .unclickable;
            }
            color: #aaa; //待提取
            font-size: 14px;
            margin-bottom: 20px;

            .icon-arrow {
                display: inline-block;
                margin-right: 5px;
                transform: rotate(-90deg);
            }
            .expanded.icon-arrow {
                transform: rotate(0deg);
            }
            .title {
                vertical-align: middle;
            }
        }
    }
</style>
