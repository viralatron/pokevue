<script setup>
import usePokemonStore from "@/stores/pokemon";

const pokemonStore = usePokemonStore();
</script>
<template>
  <div>{{ pokemonStore.pokemon }}</div>
  <div>{{ pokemonStore.evolution_chain }}</div>
</template>
