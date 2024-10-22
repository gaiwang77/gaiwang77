<script setup>
import ReLIst from './ReLIst.vue';
import { onMounted, ref } from 'vue';
let reviews=ref(null)
onMounted(async function(){
    let response=await fetch("https://cwpeng.github.io/live-records-samples/data/reviews.json");
    let data=await response.json();
    reviews.value=data;
});
 
//https://cwpeng.github.io/live-records-samples/data/reviews.json

</script>

<template>
<div class="headline">產品評價</div>
<div v-if="reviews===null">資料載入中</div>
<ReLIst v-else :reviews="reviews">
    
</ReLIst>
</template>

<style scoped>

</style>