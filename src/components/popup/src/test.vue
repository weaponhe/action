<template>
    <popup :open="open">
        <div class="content">
            <ac-button type="primary" @click="open=false">关闭</ac-button>
        </div>
    </popup>
</template>

<script>
    export default {
        name: 'test',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                open: true
            }
        }
    }
</script>

<style scoped>
    .content {
        width: 50%;
        height: 50%;
        margin: 0 auto;
        background-color: #FFF;
    }
</style>
