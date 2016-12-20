<template>
  <div>
    <message type="error" :open="openMessage">任务名冲突,请重新输入。</message>
    <message-box :title="boxTitle" v-model="vModelValue" @ok="ok">
      <ac-input placeholder="请输入名称" v-model="title"></ac-input>
      <ac-input placeholder="请输入描述" v-model="description"></ac-input>
      <input v-if="showDate" type="date" v-model="deadline"/>
      <ac-select v-if="showSelect" :options="todoList" v-model="path"></ac-select>
    </message-box>
  </div>
</template>

<script type="text/ecmascript-6">
  import mixin from 'action-ui/dist/mixin'
  export default {
    name: 'TodoBox',
    mixins: [mixin.ModelMixin],
    data(){
      return {
        boxTitle: '新建子任务',
        showSelect: true,
        showDate: true,
        openMessage: false,
        title: '',
        description: '',
        deadline: '',
        path: '',
      }
    },
    computed: {
      store(){
        return this.$store.state.todo
      },
      currentTodo(){
        let isTodoReg = /^\/todo/,
          path = this.$route.path
        return isTodoReg.test(path) ? path : ''
      },
      parentTodo(){
        return this.currentTodo.split('/').slice(0, -1).join('/')
      },
      grandTodo(){
        return this.parentTodo.split('/').slice(0, -1).join('/')
      },
      todoList(){
        return this.store[this.parentTodo].subTodoList.map((sub) => {
          return {text: sub.title, value: sub.path}
        })
      },
    },
    watch: {
      vModelValue(val){
        val && this.reset()
      }
    },
    methods: {
      reset(){
        this.setTitle()
        this.setDesc()
        this.setDate()
        this.setPath()
      },
      setTitle(){
        //默认设置为空
        this.title = ''
      },
      setDesc(){
        //默认设置为空
        this.description = ''
      },
      setDate(){
        //默认设置为今天的时间
        let date = new Date()
        this.deadline = date.getFullYear() + '-' +
          (date.getMonth() + 1) + '-' +
          date.getDate();
      },
      setPath(){
        this.path = this.currentTodo
      },
      validate(){

      },
      ok(){
        if (!this.$store.state.todo[this.path + '/' + this.title]) {
          this.$store.commit(this.$store.state.todo.types.ADD_TODO, {
            title: this.title,
            description: this.description,
            path: this.path,
            deadline: this.deadline
          })
        }
        else {
          this.openMessage = true
          setTimeout(() => {
            this.openMessage = false
          }, 2000)
        }
      }
    }
  }
</script>
