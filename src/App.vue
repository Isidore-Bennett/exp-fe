<script setup>
import Home from "@/components/Home.vue";

</script>


<template>
  <router-view/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
    padding-right: calc(var(--section-gap) / 2);
    flex-wrap: wrap;
  }
}
</style>
