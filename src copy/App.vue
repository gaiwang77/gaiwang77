<script setup>
import NavComp from "./Nav.vue";
import MainComp from "./main.vue";
import { ref } from "vue";
let subtitle=ref("this is subtitle");
let newtitle=function(){
    subtitle.value="this is new subtitle";
};
let visable=ref(true);
let hide=function(){
    visable.value=false
};
let show=function(){
    visable.value=true
} 
</script>
<template>
<NavComp title="this is a title"
:subtitle="subtitle"></NavComp>   

<MainComp v-if="visable"
color="white" 
 backgroundColor="black"
 @update="newtitle"> </MainComp>
 <button @click="hide">hide</button>
 <button @click="show">show</button>
</template>
<style scoped>

</style>