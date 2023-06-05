import {createRouter, createWebHistory} from "vue-router";
import Home from '../pages/home/index.vue'

const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login/index.vue'),
        meta: {isShow: false}
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../components/register/index.vue'),
        meta: {isShow: false}
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/home/index.vue'),
        meta: {isShow: true}
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../pages/news/index.vue'),
        meta: {isShow: true},
        children: [
            {
                path: 'itnews',
                name: 'itnews',
                component: () => import('../pages/news/itNews.vue')
            },
            {
                path: 'doubannews',
                name: 'doubannews',
                component: () => import('../pages/news/doubanNews.vue')
            },
            {
                path: 'douyinnews',
                name: 'douyinnews',
                component: () => import('../pages/news/douyinNews.vue')
            },
            {
                path: 'weibonews',
                name: 'weibonews',
                component: () => import('../pages/news/weiboNews.vue')
            },
            {
                path: 'tiebanews',
                name: 'tiebanews',
                component: () => import('../pages/news/tiebaNews.vue')
            },
            {
                path:'historynews',
                name:'historynews',
                component:()=>import('../pages/news/historyNews.vue')
            },
            {
                path:'bilibilinews',
                name:'bilibilinews',
       component:()=>import('../pages/news/biliNews.vue')
            },
            {
                path:'baidunews',
                name:'baidunews',
                component:()=>import('../pages/news/baiduNews.vue')
            },
            {
                path:'zhihunews',
                name:'zhihunews',
                component:()=>import('../pages/news/zhihuNews.vue')
            },
            {
                path:'sanliukenews',
                name:'sanliukenews',
                component:()=>import('../pages/news/sanliukeNews.vue')
            },
            {
                path:'tigernews',
                name:'tigernews',
                component:()=>import('../pages/news/tigerNews.vue')
            }

        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router