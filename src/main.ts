import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'
const app = createApp(App);
// Vue.component('header',header);
//全局注册
import Header from '../src/components/header/index.vue'
import Footer from './components/footer/index.vue'
import commonNews from '../src/pages/news/newsCommon/index.vue'
app.component('commonNews',commonNews)
app.component('Header',Header)
app.component('Footer',Footer)
// Element-puls
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
//pinia
import {createPinia} from 'pinia'
const pinia =createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
