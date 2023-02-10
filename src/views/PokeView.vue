<script setup>
import Pokemon from "@/components/Pokemon.vue";
</script>
<template>
  <main>
    <Pokemon />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
