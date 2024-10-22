<script setup>
defineProps(['subtitle','title']);
</script>
<template>
    <nav>{{title}}</nav>
<nav>{{ subtitle }}</nav>
</template>
<style scoped>
nav{padding: 10px;}
</style>