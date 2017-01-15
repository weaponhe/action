<template>
    <div class="breadcrumb">
        <div class="left">
            <span class="backward router-link" @click="backward">&lt; 返回</span>
        </div>
        <div class="right">
            <router-link v-for="(todo,index) in itemList"
                         :to="{name:'todo',query:{path:todo.path}}"
                         class="router-link crumb">
                {{todo.title | decode}}
            </router-link>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'breadcrumb',
    computed: {
      itemList(){
        let titleList = this.$route.query.path.split('/'),
            path      = titleList.slice(0, 2).join('/'),
            ret       = []
        titleList.slice(2).forEach(title =>
        {
          path += '/' + title
          ret.push(this.$store.state.todo[path])
        })
        return ret
      }
    },
    methods: {
      backward(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

    .breadcrumb {
        position: relative;
        margin-top: 1em;
        color: #ccc;
        vertical-align: baseline;
        font-size: 14px;
        line-height: 30px;
        .left {
            float: left;
            width: 10%;
        }
        .right {
            float: right;
            text-align: right;
            width: 80%;
        }
        .router-link {
            color: #aaa;
            cursor: pointer;
            vertical-align: middle;
            display: inline-block;
            &:hover {
                color: #4fc08d
            }
        }
        .crumb {
            text-align: center;
            margin-right: 0.5em;
            border-radius: 3px;
            background-color: rgba(31, 47, 61, 0.05);
            padding: 0 0.5em;

            max-width: 6em;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            &:hover {
                background-color: rgba(31, 47, 61, 0.1);
            }
        }
        &:after {
            content: ".";
            display: block;
            height: 0;
            visibility: hidden;
            clear: both;
        }
    }
</style>
