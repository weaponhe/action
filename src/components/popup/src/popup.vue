<template>
    <div v-if="open"
         class="popup"
         :class="{modal}"
         :style="{zIndex:popupIndex,backgroundColor: transparent}">
        <slot></slot>
    </div>
</template>

<script>
    import mixin from '../../popup-mixin'

    export default {
        name: 'popup',
        mixins: [mixin]
    }
</script>

<style scoped>
    .popup {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }

    .modal {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
