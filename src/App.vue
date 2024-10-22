<script setup>
import Page from './Page.vue';
import RePage from './RePage.vue';
import { ref } from 'vue';
let page=ref("product");
let change=function(clickedPage){
page.value=clickedPage
};
</script>

<template>
<nav>
    <span :class="page==='product'?'current':''" @click="change('product')">產品資料</span>
    <span :class="page==='review'?'current':''" @click="change('review')">評論訊息</span>
</nav>
<main>
<Page v-if="page==='product'"></Page>
<RePage v-if="page==='review'"></RePage>
</main>
</template>

<style scoped>
nav{font-size: 21px;}
nav>span{
    padding: 20px;
}
nav>span.current{font-weight: bold;}
</style>