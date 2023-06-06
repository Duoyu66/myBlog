<script setup lang="ts">
import {useNews} from "../../store/news.ts";
import {storeToRefs} from "pinia";
const newsMain = useNews();
const {historyNews} = storeToRefs(newsMain)
newsMain.getHistory();
</script>

<template>
  <div class="newsHeader">
    <span class="mainContent">{{historyNews.title}}({{historyNews.subtitle}})</span>
    <span class="youDing">更新时间:{{historyNews.update_time}}</span>
  </div>

  <ul class="kk" v-for="(item) in historyNews.data" :key="historyNews.index">
    <a :href="item.url" target="_blank">
      <li>
        <i  style="margin-left: 10px">
          {{item.index}}、
        </i>
        <span> {{item.title}}</span>
        <span>{{item.desc}}</span>
      </li>
    </a>


  </ul>
</template>

<style scoped>
@import 'css/commonn.css';
.kk li{
  height: 150px;
  border: 1px solid red;
}
</style>