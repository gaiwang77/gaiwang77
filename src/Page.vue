<script setup>
// https://cwpeng.github.io/live-records-samples/data/products.json
//https://cwpeng.github.io/live-records-samples/data/reviews.json
import {onMounted, ref } from 'vue';
import List from './List.vue';
let products=ref(null);//建立空值，來抓JSON
//組件掛載完成後，開始呼叫fetch串接後端的資料
onMounted(async function(){
let response=await fetch("https://cwpeng.github.io/live-records-samples/data/products.json");
let data=await response.json();
products.value=data;
});
</script>

<template>
<div class="headline">產品資料列表</div>
<div  v-if="products===null">資料載入中</div>
<List v-else :products="products">
    
</List>
</template>

<style scoped>

</style>