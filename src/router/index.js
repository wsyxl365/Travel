import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List';
import Ani from '@/pages/list/Ani';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/ani',
            name: 'Ani',
            component: Ani
        }
    ]
})
