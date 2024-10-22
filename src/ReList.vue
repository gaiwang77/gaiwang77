<script setup>
defineProps(["reviews"]);
</script>

<template>
<div class="list" >
    <div class="review" v-for="review in reviews" >
        <div class="name">顧客名稱:{{ review.name }}</div>
        <div class="des">產品評價:{{ review.star }}顆星</div>
        <div class="price">顧客留言{{ review.message }}</div>
    </div>
</div>
</template>

 <style scoped>

</style>