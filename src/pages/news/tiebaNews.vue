<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {tiebaNews} = storeToRefs(newsMain)
newsMain.getTieba();
</script>

<template>
  {{tiebaNews}}
<!--  <div class="newsHeader">-->
<!--    <span class="mainContent">{{itNews.title}}({{itNews.subtitle}})</span>-->
<!--    <span class="youDing">更新时间:{{itNews.update_time}}</span>-->
<!--  </div>-->
</template>

<style scoped>

</style>