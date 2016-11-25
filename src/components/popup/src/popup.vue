<template>
    <div class="popup"
         v-if="open"
         :style="{zIndex:zIndex,backgroundColor: transparent}">
        <slot></slot>
    </div>
</template>

<script>
    let global = {
        openCount: 0
    }
    let data = function () {
        return {
            zIndex: 0,
            transparent: '',
            global: global
        }
    }
    data.openCount = 0
    export default {
        name: 'popup',
        data: data,
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        mounted(){
            if (open) {
                this.global.openCount++
                this.zIndex = this.global.openCount
            }
        },
        watch: {
            open(open){
                if (open) {
                    this.global.openCount++
                    this.zIndex = this.global.openCount
                }
                else {
                    this.global.openCount--
                }
            },
            'global.openCount': function () {
                this.transparent = this.global.openCount === this.zIndex ? '' : 'transparent'
            }
        }
    }
</script>

<style scoped>
    .popup {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
