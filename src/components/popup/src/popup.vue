<template>
    <div class="popup" v-if="open" :style="{zIndex:zIndex}">
        <slot></slot>
    </div>
</template>

<script>
    let $openCount = 0
    let $closeCount = 0
    export default {
        name: 'popup',
        data(){
            return {
                zIndex: 0
            }
        },
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        mounted(){
            if (open) {
                $openCount++
                this.zIndex = $openCount
            }
        },
        watch: {
            open(open){
                if (open) {
                    $openCount++
                    this.zIndex = $openCount
                }
                else {
                    $closeCount++
                }
                if ($openCount === $closeCount) {
                    $openCount = $closeCount = 0
                }
            }
        },
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
