<template>
    <div class="banner">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1609/a9/a90f734bbc7b80aea3.water.jpg_600x330_61fbe1ab.jpg" alt="" />
        <div class="banner-info">
            <div class="banner-tittle">
                合肥融创主题乐园（原合肥万达主题）
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe67f;</span>
                20
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBanner"
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0,0,0, 0), rgba(0,0,0,.8))
            .banner-tittle
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                margin-top .14rem
                padding 0 .4rem
                line-height .32rem
                height .32rem
                border-radius .2rem
                background rgba(0, 0, 0, .8)
                font-size .24rem
                .banner-icon
                    font-size .24rem
</style>
