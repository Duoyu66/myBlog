<script setup lang="ts">

</script>
<template>
  <div class="nav_header">
    <ul class="leftUl">
      <li>
        <a href="/home">首页</a>
      </li>
      <li>
        <a href="/news/itnews">新闻</a>
      </li>
      <li>
        <a href="/moods">心情</a>
      </li>
      <li>
        <a href="/about">关于</a>
      </li>
      <li>
        <a href="/searchList">网站导航</a>
      </li>

    </ul>
    <ul class="rightUl">
      <li>
        <a href="/login">登录</a>
      </li>
      <li>
        <a href="/register">注册</a>
      </li>
      <li>
        <button>切换主题</button>
      </li>
    </ul>
  </div>
  <el-divider style="margin-top: 0"></el-divider>
</template>

<style scoped>
.nav_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  font-size: 22px;
}

.nav_header .leftUl li {
  float: left;
  margin-right: 5px;
}

.nav_header .leftUl {
  padding-left: 180px;

}

.nav_header .rightUl {
//padding-right: 80px;
}

.nav_header .rightUl li {
  margin-right: 5px;
  float: right;
}
</style>