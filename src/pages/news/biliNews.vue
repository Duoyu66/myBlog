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
  <ul class="contentGe" v-for="(item) in biliNews.data" :key="biliNews.index">
    <a :href="item.url" target="_blank">
      <li>
        <i v-if="item.index==1">
          <img class="beforeContent" src="./svg/金牌.svg" alt="">
        </i>
        <i v-else-if="item.index==2">
          <img class="beforeContent" src="./svg/银牌.svg" alt="">
        </i>
        <i v-else-if="item.index==3">
          <img class="beforeContent" src="./svg/铜牌.svg" alt="">
        </i>
        <i v-else style="margin-left: 10px">
          {{item.index}}、
        </i>
        <span> {{item.title}}</span>
      </li>
    </a>
  </ul>
</template>

<style scoped>
@import 'css/commonn.css';
</style>