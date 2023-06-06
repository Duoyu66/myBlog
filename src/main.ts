import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'
const app = createApp(App);
// Vue.component('header',header);
import Header from '../src/components/header/index.vue'
import Footer from './components/footer/index.vue'
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
