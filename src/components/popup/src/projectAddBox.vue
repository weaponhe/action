<template>
    <message-box title="新建" v-model="show" @ok="ok">
      <ac-input placeholder="请输入名称" v-model="title"></ac-input>
      <ac-input placeholder="请输入描述" v-model="description"></ac-input>
      <select>
        <option value ="project">项目</option>
        <option value ="book">书单</option>
        <option value="post">文章</option>
      </select>
    </message-box>
</template>

<script>
    export default {
        name: 'projectAddBox',
        data(){
          return {
            show:false,
            title:'',
            description:'',
            type:'project'
          }
        },
        props:{
            value:Boolean
        },
        methods:{
          ok(){
            console.log(this.title,this.description,this.type)
          }
        },
        watch:{
          value(val){
            this.show = val
          },
          show(val){
            this.$emit('input',val)
          }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
