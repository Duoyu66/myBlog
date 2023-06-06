import {defineStore} from 'pinia'
import {reqItNews} from "../api/news.ts";
export const useNews =defineStore('news',{
    state:()=>{
        return {
            //it新闻
            itNews:{},

        }
    },
    actions:{
        async getItNews(){
            this.itNews = await reqItNews();
        }
    },
    getters:{}
})