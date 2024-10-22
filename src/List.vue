<script setup>
defineProps(["products"]);
</script>

<template>
<div class="list" >
    <div class="product" v-for="product in products" >
        <div class="name">產品名稱:{{ product.name }}</div>
        <div class="des">產品描述:{{ product.description }}</div>
        <div class="price">價格:${{ product.price }}</div>
    </div>
</div>
</template>

 <style scoped>

</style>