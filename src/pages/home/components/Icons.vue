<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide
                v-for="(page, index) of pages"
                :key="index"
            >
                <div
                    class="icon"
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data() {
            return {
                swiperOption: {},
                iconList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc: "热门景点"
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc: "一日游"
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc: "合肥必游"
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                        desc: "游乐场"
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
                        desc: "自然风光"
                    },
                    {
                        id: '0006',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
                        desc: "休闲玩乐"
                    },
                    {
                        id: '0007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                        desc: "西递村"
                    },
                    {
                        id: '0008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                        desc: "溜娃儿"
                    },
                    {
                        id: '0009',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                        desc: "泡温泉"
                    },
                ]
            }
        },
        computed: {
            pages () {
                /**
                 * 二维数组存放
                 * @type {Array}
                 */
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        margin-top: .1rem
        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem
                .icon-img-content
                    margin: 0 auto
                    display: block
                    height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>
