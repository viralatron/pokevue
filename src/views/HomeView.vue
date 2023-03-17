<script setup>
import PokeList from "@/components/PokeList.vue";
</script>

<template>
  <main>
    <div>
      <h2 class="green">A pokémon searching application</h2>
      <p>This is an application to look into pokémon information</p>
      <PokeList />
    </div>
  </main>
</template>
<style lang="scss">
main {
  h2,
  p {
    text-align: center;
  }
}
</style>
