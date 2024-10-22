<script setup>

import {onMounted, onUnmounted, ref } from 'vue';
defineProps(["color", "backgroundColor"]);
let text=ref("主要網站內容");
let change=function(){
    text.value="new word";
};


let emit=defineEmits(["update"]);
let updateTitle=function(){
    emit("update");
};
let counter=ref(0);
let scheduleTd;
onMounted(function(){
    scheduleTd=window.setInterval(function(){
        console.log("數字加一");
        counter.value=counter.value+1;
}, 1000);
});
onUnmounted(function(){
    window.clearInterval(scheduleTd);
});
</script>
<template>

<main :style="{color:color, backgroundColor:backgroundColor}">
    基本的主內容
   <!-- red <input type="radio" value="red" v-model="color" />
   green <input type="radio" value="green" v-model="color" />
   <div :class="color">這是{{ color }}</div> -->
   <div>{{ counter }}</div>
   <!-- <div @click="change">{{ text }}</div> -->
   <button @click="updateTitle">change</button>
</main>
</template>
<style scoped>
main{
 padding: 10px;   background-color: #bcbcbc;
}

</style>