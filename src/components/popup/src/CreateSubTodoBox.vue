<template>
  <div>
    <message type="error" :open="openConfictMessage">任务名冲突,请重新输入。</message>
    <message-box :title="boxTitle" v-model="vModelValue" @ok="ok">
      <ac-input placeholder="请输入名称" v-model="title"></ac-input>
      <ac-input placeholder="请输入描述" v-model="description"></ac-input>
      <ac-select v-if="showSelect" :options="todoList" v-model="path"></ac-select>
    </message-box>
  </div>
</template>

<script>
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'CreateSubTodoBox',
    mixins: [mixin.ModelMixin],
    data(){
      return {
        boxTitle: '新建子任务',
        showSelect: true,
        openConfictMessage: false,
        title: '',
        description: '',
        path: '',
      }
    },
    computed: {
      todoList(){
        let parentTodo = this.$store.state.todo[this.$route.path]
        return parentTodo ? [parentTodo].map((sub) => {
          return {text: sub.title, value: sub.path}
        }) : []
      }
    },
    watch: {
      vModelValue(val){
        if(val){
          val && this.setPath()
        }else{
          this.reset()
        }
      }
    },
    methods: {
      ok(){
        if (!this.$store.state.todo[this.path + '/' + this.title]) {
          this.$store.commit(this.$store.state.todo.types.ADD_TODO, {
            title: this.title,
            description: this.description,
            path: this.path
          })
        }
        else {
          this.openConfictMessage = true
          setTimeout(() => {
            this.openConfictMessage = false
          }, 2000)
        }
        this.reset()
      },
      reset(){
        this.title = ''
        this.description = ''
      },
      setPath(){
        let path = this.$route.path,
          defaultSelectedTodo = this.todoList.find(todo => todo.value === path)
        this.path = defaultSelectedTodo ? defaultSelectedTodo.value : this.todoList[0].value
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
