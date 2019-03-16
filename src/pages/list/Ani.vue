<template>
    <transition>
        <div name="fade">你好</div>
    </transition>
</template>

<script>
    export default {
        name: "Ani"
    }
</script>

<style scoped>
    .fade-enter {
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
