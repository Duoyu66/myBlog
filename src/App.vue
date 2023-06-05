<script setup lang="ts">
import {useRoute,useRouter} from 'vue-router'
import {onMounted} from "vue";
const route = useRoute();
const router = useRouter();
onMounted(()=>{
  console.log("我是Appvue的路由信息",route.meta)
})
</script>

<template>
  <div style="font-family: '钉钉进步体 Regular',serif;">
    <Header v-if="useRoute().meta.isShow"></Header>
    <router-view ></router-view>
    <Footer v-if="useRoute().meta.isShow"></Footer>
  </div>

</template>

<style scoped>
@import "public/reset.css";

html, body {
  width: 100%;
  height: 100%;
}

/*字体引用*/
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "钉钉进步体 Regular";
  font-weight: 400;src: url("../public/font/DingTalk_JinBuTi_Regular.woff2") format("woff2"),
  url("../public/font/DingTalk_JinBuTi_Regular.woff") format("woff");
  font-display: swap;
}
</style>
