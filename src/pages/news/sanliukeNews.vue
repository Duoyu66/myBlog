<script setup lang="ts">

import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {sanliukeNews} = storeToRefs(newsMain);
newsMain.getSanliuke();
</script>

<template>
  <div class="newsHeader">
    <span class="mainContent">{{sanliukeNews.title}}({{sanliukeNews.subtitle}})</span>
    <span class="youDing">更新时间:{{sanliukeNews.update_time}}</span>
  </div>
  <commonNews :dataObj="sanliukeNews"></commonNews>
</template>

<style scoped>
@import 'css/commonn.css';
</style>