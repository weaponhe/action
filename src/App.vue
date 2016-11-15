<template>
  <div id="app">
    <button @click="test">test</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      test () {
        this.$store.commit(this.$store.state.todo.types.ADD_TODO)
        console.log(this.$store.state.todo.all)
      }
    }
  }
</script>

<style>
</style>
