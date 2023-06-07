<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {biliNews} = storeToRefs(newsMain)
newsMain.getBili()
</script>

<template>
  <div class="newsHeader">
    <span class="mainContent">{{biliNews.title}}({{biliNews.subtitle}})</span>
    <span class="youDing">更新时间:{{biliNews.update_time}}</span>
  </div>
<commonNews :dataObj="biliNews"></commonNews>
</template>

<style scoped>
@import 'css/commonn.css';
</style>