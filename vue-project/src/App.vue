<script setup>
import Card from './Card.vue';

const getShortDescription = (des, expanded) => {
  return expanded ? des : des.slice(0, 20) + '...';
};
</script>

<template>
  <div class="container">

    <Card></Card>
  </div>
</template>

<style scoped>
.container{
  width: 1600px;
  padding: 2rem;
}
</style>
