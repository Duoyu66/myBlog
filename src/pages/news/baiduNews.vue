<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {baiduHotNews} = storeToRefs(newsMain);
newsMain.getBaiduHot()
</script>

<template>
  <div class="newsHeader">
    <span class="mainContent">{{baiduHotNews.title}}({{baiduHotNews.subtitle}})</span>
    <span class="youDing">更新时间:{{baiduHotNews.update_time}}</span>
  </div>
<commonNews :dataObj="baiduHotNews"></commonNews>
</template>

<style scoped>
@import 'css/commonn.css';
</style>