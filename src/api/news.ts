import requests from "../utils/requests.ts";
//it新闻
export const reqItNews = () =>requests({url:'https://api.vvhan.com/api/hotlist?type=itInfo',method:'get'})
//豆瓣
export const reqDoubanNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=douban',method:'get'})

//抖音
export const reqDouyinNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=douyinHot',method:'get'})
//微博
export const reqWeiboNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=wbHot',method:'get'})

//百度贴吧
export const reqBaiduNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=baiduRY',method:'get'})

//历史上的今天
export const reqHistoryNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=history',method:'get'})

//B站热搜
export const reqBiliNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=bili',method:'get'})

//百度热点
export const reqBaiduHot =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=baiduRD',method:'get'})

//知乎热点
export const reqZhihuNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=zhihuHot',method:'get'})

//36氪
export const reqSanliuNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=36Ke',method:'get'})

//虎扑步行街
export const reqTigerNews =()=>requests({url:'https://api.vvhan.com/api/hotlist?type=huPu',method:'get'})
