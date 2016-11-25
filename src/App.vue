<template>
    <div>
        <app-bar :fixed="true">
            <tooltip slot="left" content="left tooltip" direction="bottom">
                <icon name="account" :size="20"></icon>
            </tooltip>
            <tooltip slot="right">
                <icon name="add" :size="20"></icon>
            </tooltip>
        </app-bar>

        <nav>
            <vertical-menu :data="navTree"></vertical-menu>
        </nav>

        <div class="main">
            <!--<div>{{global.sum}}</div>-->
            <!--<ac-button type="danger" @click="add">查看详情</ac-button>-->
            <!--<ac-button type="success" @click="minus">查看详情</ac-button>-->
        </div>

        <test></test>
        <test></test>
        <test></test>
    </div>
</template>

<script>
    let navTree = [
        {
            title: "item1",
            icon: "smile",
            children: [
                {
                    title: "item1-1"
                }, {
                    title: "item1-2",
                    children: [
                        {
                            title: "item1-2-1",
                            active: true
                        },
                        {
                            title: "item1-2-2",
                            active: true
                        }
                    ]
                }
            ]
        },
        {
            title: "item2",
            icon: "smile",
            children: [
                {
                    title: "item2-1"
                }, {
                    title: "item2-2",
                    icon: "smile"
                }
            ]
        }, {
            title: "item3",
            icon: "smile",
            children: [
                {
                    title: "item3-1"
                }, {
                    title: "item3-2"
                }
            ]
        }
    ]
    let global = {
        sum: 0
    }
    export default {
        name: 'app',
        data(){
            return {
                navTree: navTree,
                global: global
            }
        },
        methods: {
            add(){
                this.global.sum++
            },
            minus(){
                this.global.sum--
            }
        }
    }
</script>

<style>
    body {
        background: #ededed;
    }

    nav {
        position: fixed;
        top: 56px;
        bottom: 0;
        left: 0;
        width: 250px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .main {
        margin-top: 56px;
        margin-left: 250px;
    }
</style>
