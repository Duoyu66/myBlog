import {defineStore} from 'pinia'
import {
    reqBaiduHot,
    reqBaiduNews,
    reqBiliNews,
    reqDoubanNews,
    reqDouyinNews,
    reqHistoryNews,
    reqItNews, reqSanliuNews, reqTigerNews,
    reqWeiboNews, reqZhihuNews
} from "../api/news.ts";
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
            historyNews:{},
            //B站
            biliNews:{},
            //百度热搜
            baiduHotNews:{},
            //知乎
            zhihuNews:{},
            //36氪
            sanliukeNews:{},
            //虎扑步行街
            tigerNews:{}

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
        },
        //B站
        async getBili(){
            this.biliNews = await reqBiliNews()
        },
        //百度热搜
        async getBaiduHot(){
            this.baiduHotNews = await reqBaiduHot()
        },
        //知乎
        async getZhihu(){
            this.zhihuNews = await reqZhihuNews()
        },
        //36氪
        async getSanliuke(){
            this.sanliukeNews = await  reqSanliuNews();
        },
        //虎扑步行街
        async getTigerNews(){
            this.tigerNews = await  reqTigerNews()
        }
    },
    getters:{}
})