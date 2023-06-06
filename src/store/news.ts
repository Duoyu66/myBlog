import {defineStore} from 'pinia'
import {reqBaiduNews, reqDoubanNews, reqDouyinNews, reqHistoryNews, reqItNews, reqWeiboNews} from "../api/news.ts";
export const useNews =defineStore('news',{
    state:()=>{
        return {
            //it新闻
            itNews:{},
            //豆瓣
            doubanNews:{},
            //抖音
            douyinNews:{},
            //微博
            weiboNews:{},
            //贴吧
            tiebaNews:{},
            //历史
            historyNews:{}

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
        },
        //抖音
        async getDouyin(){
            this.douyinNews = await reqDouyinNews();
        },
        //微博
        async getWeibo(){
            this.weiboNews = await reqWeiboNews();
        },
        //贴吧
        async getTieba(){
            this.tiebaNews = await reqBaiduNews();
        },
        //历史
        async getHistory(){
            this.historyNews = await reqHistoryNews()
        }
    },
    getters:{}
})