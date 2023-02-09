<script setup>
import usePokemonStore from "@/stores/pokemon";

const pokemonStore = usePokemonStore();
</script>
<template>{{ pokemonStore.pokemon }}</template>
