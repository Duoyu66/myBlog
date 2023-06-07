<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {tiebaNews} = storeToRefs(newsMain)
newsMain.getTieba();
</script>

<template>
  <div class="newsHeader">
    <span class="mainContent">{{tiebaNews.title}}({{tiebaNews.subtitle}})</span>
    <span class="youDing">更新时间:{{tiebaNews.update_time}}</span>
  </div>
  <commonNews :dataObj="tiebaNews"></commonNews>
</template>

<style scoped>
@import 'css/commonn.css';
</style>