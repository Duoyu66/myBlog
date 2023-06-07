<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {tigerNews} = storeToRefs(newsMain);
newsMain.getTigerNews();
</script>

<template>
  <div class="newsHeader">
    <span class="mainContent">{{tigerNews.title}}({{tigerNews.subtitle}})</span>
    <span class="youDing">更新时间:{{tigerNews.update_time}}</span>
  </div>
  <commonNews :dataObj="tigerNews"></commonNews>
</template>

<style scoped>
@import 'css/commonn.css';
</style>