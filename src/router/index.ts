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
        component: () => import('../pages/news/index.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router