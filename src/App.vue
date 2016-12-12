<template>
  <div>
    <top-bar></top-bar>
    <nav-menu></nav-menu>
    <div class="main">
      <ac-button @click="show=true">添加项目</ac-button>
      <ac-button @click="showTaskAddBox=true">添加任务</ac-button>
      <br>
      <ac-select :options="selectArray" size="mini" v-model="selectedValue"></ac-select>
      <ac-input v-model="inputValue" size="mini" style="display: inline-block"></ac-input>
      <br>
      <ac-select :options="selectArray" size="small" v-model="selectedValue"></ac-select>
      <ac-input v-model="inputValue" size="small" style="display: inline-block"></ac-input>
      <br>
      <ac-select :options="selectArray" v-model="selectedValue"></ac-select>
      <ac-input v-model="inputValue" style="display: inline-block"></ac-input>
      <br>
      <ac-select :options="selectArray" size="large" v-model="selectedValue"></ac-select>
      <ac-input v-model="inputValue" size="large" style="display: inline-block"></ac-input>
      <!--<ac-checkbox v-model="checkValue"></ac-checkbox>-->

      <router-view></router-view>
    </div>

    <project-add-box v-model="show"></project-add-box>
    <Task-add-box v-model="showTaskAddBox"></Task-add-box>
  </div>
</template>

<script>
  let index = 0
  export default {
    name: 'app',
    data(){
      return {
        show: false,
        showTaskAddBox: false,
        alertShow: false,
        confirmShow: false,
        promptShow: false,
        inputValue: 'test',
        checkValue: true,
        selectArray: [
          {value: 'project', text: 'a'},
          {value: 'post', text: 'b'},
          {value: 'book', text: 'c'}
        ],
        selectedValue: ''
      }
    },
    created(){
      this.selectedValue = this.selectArray[2].value
    },
    watch: {
      inputValue(val){
        console.log(val)
      },
      checkValue(val){
        console.log(val)
      },
      selectedValue(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  body {
    margin: 0;
    padding: 0;
  }

  .main {
    position: absolute;
    top: 56px;
    bottom: 0;
    left: 250px;
    right: 0;
    padding: 10px 20px;
    .list {
      margin-top: 50px;
    }
  }
</style>
