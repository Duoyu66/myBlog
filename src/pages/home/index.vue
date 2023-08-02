<script setup lang="ts">
import {useRoute,useRouter} from 'vue-router'
import * as echarts from 'echarts'
import {onMounted} from "vue";
const route = useRoute();
const router = useRouter();
const init = ()=>{
  let myChart = echarts.init(document.getElementById('all'))
  let option = {
    title: {
      text: '题目类型完成数量'
    },
    tooltip: {},
    legend: {
      data: ['AC数量']
    },
    xAxis: {
      data: ['数组','字符串','栈和队列','二叉树','动态规划','贪心算法','链表','回溯算法','数学问题'],
      axisLabel: { //设置x轴的字
        show:true,
        interval:0,//使x轴横坐标全部显示
        textStyle: {//x轴字体样式
          color: "rgba(0,0,0)",
          margin: 15
        }
    }},
    yAxis: {},
    series: [
      {
        name: 'AC量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20,2,3,4]
      },
      {
        type:'pie',
        center:['65%',60],
        radius:35,
        data:[
          {name:'数组',value:48},
          {name:'字符串',value:48},
          {name:'栈和队列',value:48},
          {name:'二叉树',value:48},
          {name:'动态规划',value:48},
          {name:'贪心算法',value:48},
          {name:'回溯算法',value:48},
          {name:'数学问题',value:48},

        ]
      }
    ]
  };
  myChart.setOption(option)
}
onMounted(()=>{
  // console.log(route.meta)
  init()
})

</script>
<template>
<!--<h1>leetcode可视化大屏-->
<!--</h1>-->
  <div id="main">

    <div id="all">

    </div>
  </div>
</template>

<style scoped lang="less">
#main{
  width: 100%;
  height: 600px;
  border: 1px solid red;
}
#all{
  padding: 0;
  margin: 0;
  width: 900px;
  height: 300px;
  border: 1px solid red;
  *{
    width: 100%;
    height: 100%;
  }
}
</style>