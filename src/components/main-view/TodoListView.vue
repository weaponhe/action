<template>
  <div>
    <item-list :items="items"></item-list>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ItemList from './ItemList.vue'
  export default {
    name: 'TodoListView',
    components: {ItemList},
    computed: {
      items(){
        let type = this.$route.params.type
        if (type && this.todoTypeArray.indexOf(type) !== -1)
          return this.$store.getters[type]
        else return []
      },
      ...mapGetters(['todoTypeArray'])
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
