<script setup lang="ts">
import {reactive} from "vue";

// let dataObj = reactive({
//   title: "2023高考全国卷语文作文题公布",
//   desc: "2023高考全国卷语文作文题来了↓↓大家看看难吗？",
//   pic: "https://cache.4ce.cn/star3/origin/918cc4e160d5ff0bc8d9a8ce5a8160.png",
//   hot: "258.9W个内容",
//   url: "https://tieba.baidu.com/hottopic/browse/hottopic?topic_id=14653770&amp;topic_name=2023%E9%AB%98%E8%80%83%E5%85%A8%E5%9B%BD%E5%8D%B7%E8%AF%AD%E6%96%87%E4%BD%9C%E6%96%87%E9%A2%98%E5%85%AC%E5%B8%83"
// })
const props = defineProps({
  dataObj:Object
})
</script>

<template>

  <div class="main">
    <ul v-for="item in dataObj.data" :key="item.index">
      <li>
        <div class="headerTitle">
          <a :href="item.url" target="_blank">{{item.title}}</a>

        </div>
        <div class="hotP" v-if="item.hot">
          <img style="width: 35px;height: 35px;" src="./img/火爆.svg" alt="">
          <span class="hot">{{item.hot}}</span>
        </div>
        <div class="pic" v-if="item.pic">
          <img :src="item.pic" alt="">
        </div>
        <p class="desc" v-if="item.desc">
     {{item.desc}}
        </p>

      </li>


    </ul>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 1000px;
  height: 800px;
  border-left: 1px solid red;
  margin: 0 auto;

  ul {
    //display: flex;
    //justify-content: space-around;
    //align-items: center;
    //flex-flow: row wrap;
  }

  ul > li {
    position: relative;
    //background-color: pink;
    margin-bottom: 10px;
    margin-left: 5px;
    float: left;
    border: 3px solid red;
    border-radius: 0 3%;
    height: 408px;
    width: 485px;
    overflow: hidden;
    //flex: 0 0 45%;

  }
}

.pic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 250px;
  margin-left: 17px;
  margin-top: 15px;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
  }
}

//上
.headerTitle {
  height: 50px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  //background-color:rgb(211,211,211);
  background-color: rgb(244, 146, 94);
  //.hot {
  //  align-self: flex-end;
  //
  //}
}

.hotP {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0, 36%);
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid black;
}

//下
.desc {
  width: 100%;
  height: 62px;
  font-size: 15px;
  text-indent: 2em;
  //border: 1px solid black;
  //overflow: hidden;
  //  text-overflow: ellipsis;
  //  -webkit-line-clamp: 3;
  //  -webkit-box-orient: vertical;
}

</style>