<template>
  <div class="breadcrumb">
      <span v-for="(todo,index) in itemList">
        {{index===0?'':'>'}}
        <router-link :to="todo.path">
         {{todo.title}}
        </router-link>
      </span>
  </div>
</template>

<script>
    export default{
    name:'breadcrumb',
      computed:{
        itemList(){
          let titleList = this.$route.path.split('/'),
          path = titleList.slice(0,2).join('/'),
          ret = []
          titleList.slice(2).forEach(title=>{
            path += '/' + title
            ret.push(this.$store.state.todo[path])
          })
          return ret
        }
       }
    }









</script>

<style>
  .breadcrumb{
  }












</style>
