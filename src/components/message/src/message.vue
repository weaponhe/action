<template>
    <!--<popup :open="true" mode="auto">-->
    <transition name="fade">
        <div class="toast" v-if="open" :style="{zIndex:popupIndex}">
            <span class="toast-message">{{message}}</span>
        </div>
    </transition>
    <!--</popup>-->
</template>

<script>
    import mixin from '../../popup-mixin'
    export default {
        name: 'message',
        mixins: [mixin],
        data: function () {
            return {
                type: 'success',//success/warning/info/error
                duration: 2000,
                showClose: false
            }
        },
        props: {
            message: String
        }
    }
</script>

<style scoped>
    .toast {
        position: fixed;
        /*z-index: 10000;*/
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        min-width: 300px;
        padding: 0;
        height: 50px;
        line-height: 50px;
        background-color: #FFF;
        vertical-align: middle;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
        transition: all 0.5s;
    }

    .success {
        background-color: #4fc08d;
    }

    .info {
        background-color: #20A0FF;
    }

    .warning {
        background-color: #F7BA2A;
    }

    .error {
        background-color: #FF4949;
    }

    .toast-message {
        padding: 0 10px;
        color: #666;
        font-size: 18px;
    }

    .fade-enter-active, .fade-leave-active {
        top: 0;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
        top: -50px;
    }

</style>
