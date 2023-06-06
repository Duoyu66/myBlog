import {defineStore} from 'pinia'
import {reqDoubanNews, reqItNews} from "../api/news.ts";
export const useNews =defineStore('news',{
    state:()=>{
        return {
            //it新闻
            itNews:{},
            //豆瓣
            doubanNews:{}

        }
    },
    actions:{
        //it新闻
        async getItNews(){
            this.itNews = await reqItNews();
        },
        //豆瓣
        async getDouBan(){
            this.doubanNews = await reqDoubanNews();
        }
    },
    getters:{}
})