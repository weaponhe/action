<template>
  <div class="breadcrumb">
      <span v-for="(todo,index) in itemList">
        {{index===0?'':' / '}}
        <router-link :to="todo.path" class="router-link">
         {{todo.title}}
        </router-link>
      </span>
  </div>
</template>

<script>
  export default{
    name: 'breadcrumb',
    computed: {
      itemList(){
        let titleList = this.$route.path.split('/'),
          path = titleList.slice(0, 2).join('/'),
          ret = []
        titleList.slice(2).forEach(title => {
          path += '/' + title
          ret.push(this.$store.state.todo[path])
        })
        return ret
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .breadcrumb {
    color: #ccc;
    font-size: 14px;
    .router-link {
      color: #aaa;
      &:hover{
        color: #4fc08d
      }
    }

  }
</style>
