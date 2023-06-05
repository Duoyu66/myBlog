<script setup lang="ts">
import {useRoute,useRouter} from 'vue-router'
import {onMounted} from "vue";
const route = useRoute();
const router = useRouter();
onMounted(()=>{
  console.log(route.meta)
})
</script>
<template>
<h1>我是首页</h1>
</template>

<style scoped>

</style>