<template>
  <div class="breadcrumb">
    <span class="backward router-link" @click="backward">&lt; 返回</span>
    |
    <span v-for="(todo,index) in itemList">
        {{index===0?'':'/'}}
        <router-link :to="{name:'todo',query:{path:todo.path}}" class="router-link">
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
        let titleList = this.$route.query.path.split('/'),
            path      = titleList.slice(0, 2).join('/'),
            ret       = []
        titleList.slice(2).forEach(title =>
        {
          path += '/' + title
          ret.push(this.$store.state.todo[path])
        })
        return ret
      }
    },
    methods: {
      backward(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .breadcrumb {
    margin-top: 1em;
    color: #ccc;
    vertical-align: baseline;
    font-size: 14px;
    line-height: 30px;
    .router-link {
      color: #aaa;
      cursor: pointer;
      &:hover {
        color: #4fc08d
      }
    }
  }
</style>
