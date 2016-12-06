<template>
  <nav>
    <vertical-menu :data="navData"></vertical-menu>
  </nav>
</template>

<script>

  export default {
    name: 'navMenu',
    computed: {
      menu_project_list(){
        return this.$store.getters.menu_project_list
      },
      menu_book_list(){
        return this.$store.getters.menu_book_list
      },
      menu_post_list(){
        return this.$store.getters.menu_post_list
      },
      navData(){
        let menu = this.$store.state.menu
        menu.menu_project.children = this.menu_project_list
        menu.menu_book.children = this.menu_book_list
        menu.menu_post.children = this.menu_post_list
        return menu.all
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  nav {
    position: absolute;
    top: 56px;
    bottom: 0;
    left: 0;
    width: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
