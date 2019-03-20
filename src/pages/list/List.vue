<template>
    <div>
        <transition
            :duration="{enter: 5000, leave: 10000}"
            name="fade"
            appear
            enter-active-class="animated swing fade-enter-active"
            leave-active-class="animated shake fade-leave-active"
            appear-active-class="animated swing fade-enter-active"
        >
            <div v-show="show">list</div>
        </transition>
        <button @click="handleClick">toggle</button>
    </div>

</template>

<script>
    export default {
        name: "List",
        data(){
          return {
              show: true
          }
        },
        methods: {
            handleClick() {
                this.show = !this.show;
            }
        }
    }
</script>

<style scoped>
    @import "../../../src/assets/styles/animate.css";
    /*@keyframes bounce-in {*/
        /*0% {*/
          /*transform: scale(0);*/
        /*}*/
        /*50% {*/
            /*transform: scale(1.5);*/
        /*}*/
        /*100% {*/
            /*transform: scale(1);*/
        /*}*/
    /*}*/
    /*.fade-enter-active {*/
        /*transform-origin: left center;*/
        /*animation: bounce-in 1s;*/
    /*}*/

    /*.fade-leave-active {*/
        /*transform-origin: left center;*/
        /*animation: bounce-in 1s reverse;*/
    /*}*/

    .fade-enter,
    .fade-leave-to
    {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }

</style>
