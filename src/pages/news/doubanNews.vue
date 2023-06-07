<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {doubanNews} = storeToRefs(newsMain)
newsMain.getDouBan();
</script>

<template>

  <div class="newsHeader">
    <span class="mainContent">{{doubanNews.title}}({{doubanNews.subtitle}})</span>
    <span class="youDing">更新时间:{{doubanNews.update_time}}</span>
  </div>
<commonNews :dataObj="doubanNews"></commonNews>
  123123
</template>

<style scoped>
@import 'css/commonn.css';

</style>