<template>
    <div @keyup.enter="onEnter">
        <message-box :title="boxTitle" v-model="vModelValue" @ok="ok">
            <ac-input v-if="showTitle" placeholder="请输入名称" v-model="title" autofocus></ac-input>
            <ac-input v-if="showDesc" placeholder="请输入描述" v-model="description"></ac-input>
            <ac-input v-if="showDate" v-model="deadline" type="date"></ac-input>
            <ac-select v-if="showSelect" :options="todoList" v-model="path"></ac-select>

            <template slot="footer">
                <ac-button type="success" @click="ok">确定</ac-button>
                <ac-button @click="close">取消</ac-button>
            </template>

        </message-box>
    </div>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixin'
  export default {
    name: 'TodoBox',
    mixins: [Mixin.ModelMixin],
    data(){
      return {
        boxTitle: '新建子任务',
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
            path      = this.$route.query.path
        return isTodoReg.test(path) ? path : ''
      },
      parentTodo(){
        return this.currentTodo.split('/').slice(0, -1).join('/')
      },
      grandTodo(){
        return this.parentTodo.split('/').slice(0, -1).join('/')
      },
      todoList(){
        return this.store[this.parentTodo].subTodoList.map(function (sub)
        {
          return {text: decodeURIComponent(sub.title), value: sub.path}
        })
      },
      showTitle(){
        return true
      },
      showDesc(){
        return true
      },
      showSelect() {
        return true
      },
      showDate() {
        return true
      },
      encodedTitle(){
        return encodeURIComponent(this.title)
      }
    },
    watch: {
      vModelValue(val){
        val && this.reset()
      }
    },
    methods: {
      dateFormat(date){
        let year  = date.getFullYear(),
            month = date.getMonth() + 1,
            day   = date.getDate()
        return [year,
          month < 10 ? '0' + month : month,
          day < 10 ? '0' + day : day].join('-')
      },
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
        this.deadline = this.dateFormat(new Date())
      },
      setPath(){
        this.path = this.currentTodo
      },
      validateEmpty(){
        //检测是否title为空
        if (!this.title.trim()) {
          this.$Message.add({type: 'error', text: '任务名不能为空，请重新输入。'})
          return false
        }
        return true
      },
      validateDuplicate(){
        if (this.$store.state.todo[this.path + '/' + this.encodedTitle]) {
          this.$Message.add({type: 'error', text: '任务名冲突，请重新输入。'})
          return false
        }
        return true
      },
      ok(){
        if (this.validateEmpty() && this.validateDuplicate()) {
          this.$store.commit(this.$store.state.todo.types.ADD_TODO, {
            title: this.encodedTitle,
            description: this.description,
            path: this.path,
            deadline: this.deadline
          })
          this.vModelValue = false
          this.$Message.add('创建成功。')
        }
      },
      onEnter(){
        this.ok()
      },
      close(){
        this.vModelValue = false
      }
    }
  }
</script>

<style>
    .date-input {

    }
</style>
