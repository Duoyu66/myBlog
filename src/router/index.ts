import {createRouter,createWebHistory} from "vue-router";
import Home from '../pages/home/index.vue'
const routes =[
    {
        path:'/',
        name:'home',
        component:()=>Home
    },
    {
        path:'/login',
        name: 'login',
        component:()=>import('../components/login/index.vue')
    },
    {
        path: '/register',
        name:'register',
        component:()=>import('../components/register/index.vue')
    }
]
const router  = createRouter({
    history:createWebHistory(),
    routes
})
export default router