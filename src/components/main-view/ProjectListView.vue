<template>
  <div>
    <item-list :items="items"></item-list>
  </div>
</template>

<script>
  import ItemList from './ItemList.vue'
  export default {
    name: 'ProjectListView',
    components: {ItemList},
    computed: {
      items(){
        let type = this.$route.params.type
        switch (type) {
          case 'project':
            return this.$store.getters.all_project
          case 'book':
            return this.$store.getters.all_book
          case 'post':
            return this.$store.getters.all_post
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
