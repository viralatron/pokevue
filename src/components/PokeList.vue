<script setup>
import PokeCard from "@/components/PokeCard.vue";
import usePokemonStore from "@/stores/pokemon";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const pokemonStore = usePokemonStore();
const el = ref(null);
function listPokemon(url) {
  pokemonStore.listPokemon(url);
}

useIntersectionObserver(
  el,
  () => {
    if (pokemonStore.list.next == "") {
      listPokemon();
    } else {
      listPokemon(pokemonStore.list.next);
    }
  },
  {
    threshold: 0.5,
  }
);
</script>
<template>
  <section>
    <ul class="poke-list">
      <PokeCard
        v-for="pokemon in pokemonStore.list.results"
        :pokemon="pokemon"
        :key="pokemon.name"
      />
    </ul>
    <span ref="el"></span>
  </section>
</template>
<style lang="scss">
.poke-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-evenly;
  padding-left: 0;
}
</style>
