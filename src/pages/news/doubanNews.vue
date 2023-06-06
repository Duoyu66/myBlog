<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
import {ref} from "vue";
const newsMain = useNews();
const {doubanNews} = storeToRefs(newsMain)
newsMain.getDouBan();
// 找不到图片的路径
// let picLu =ref('../')

</script>

<template>

  <div class="newsHeader">
    <span class="mainContent">{{doubanNews.title}}({{doubanNews.subtitle}})</span>
    <span class="youDing">更新时间:{{doubanNews.update_time}}</span>
  </div>
  <ul v-for="(item) in doubanNews.data" :key="item.index" class="doubanGe ">
    <li>
      <div>
     <div class="imgGe">
       <img  :src="item.pic" alt="" onerror="">
       <el-empty  description="找不到图片" />
     </div>
        <a :href="item.url" target="_blank"> {{item.title}}</a>
      </div>
    </li>
  </ul>
</template>

<style scoped>
@import 'css/commonn.css';
@import 'css/douban.css';
</style>