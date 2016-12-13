<template>
  <message-box title="新建" v-model="vModelValue" @ok="ok">
    <ac-input placeholder="请输入名称" v-model="title"></ac-input>
    <ac-input placeholder="请输入描述" v-model="description"></ac-input>
    <ac-select :options="typeArray" v-model="type"></ac-select>
  </message-box>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'ProjectAddBox',
    mixins: [mixin.default.ModelMixin],
    data(){
      return {
        title: '',
        description: '',
        type: ''
      }
    },
    computed: {
      typeArray(){
        return this.todoTypeArray.map(key => this.todoTypeMap[key])
      },
      ...mapState({
        todoTypeMap: state => state.todo.todoTypeMap,
      }),
      ...mapGetters(['todoTypeArray'])
    },
    methods: {
      ok(){
        let todos = this.$store.getters[this.type]
        let exist = todos.some(item => {
          return item.title === this.title
        })
        if (!exist) {
          this.$store.commit(this.$store.state.todo.types.ADD_PROJECT, {
            title: this.title,
            description: this.description,
            type: this.type,
          })
        }
        else {
          console.log('exist!!!')
        }
        this.reset()
      },
      reset(){
        this.title = ''
        this.description = ''
        this.setType()
      },
      setType(){
        let val = this.$route.params.type
        if (val && this.todoTypeArray.indexOf(val) !== -1)
          this.type = val
        else
          this.type = this.todoTypeArray[0]
      }
    },
    created(){
      this.setType()
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
