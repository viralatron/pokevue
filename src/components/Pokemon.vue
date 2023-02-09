<script setup>
import usePokemonStore from "@/stores/pokemon";

const pokemonStore = usePokemonStore();
</script>
<template>
  <div v-if="pokemonStore.success === true" class="pokemon">
    <figure class="pokemon__images">
      <img
        :src="pokemonStore.pokemon.sprites.front_default"
        alt="visão frontal"
      />
      <figcaption>front view</figcaption>
      <img
        :src="pokemonStore.pokemon.sprites.back_default"
        alt="visão traseira"
      />
      <figcaption>front view</figcaption>
    </figure>

    <section class="pokemon__detail">
      <div>
        <h3>No {{ pokemonStore.pokemon.id }}</h3>
      </div>
      <div>
        <h3>Name:</h3>
        <dd>{{ pokemonStore.pokemon.name }}</dd>
      </div>
      <div>
        <h3>Types:</h3>
        <ul>
          <li v-for="types in pokemonStore.pokemon.types">
            {{ types.type.name }}
          </li>
        </ul>
      </div>
      <div>
        <h3>Stats:</h3>
        <ul>
          <li v-for="stats in pokemonStore.pokemon.stats">
            {{ stats.stat.name }} - {{ stats.base_stat }}
          </li>
        </ul>
      </div>
      <div>
        <h3>Peso:</h3>
        <p>{{ pokemonStore.pokemon.weight / 10 }}Kg</p>
        <h3>Altura:</h3>
        <p>{{ pokemonStore.pokemon.height / 10 }}m</p>
      </div>
      <div>
        <h3>Aquirable Skills:</h3>
        <ul>
          <li v-for="moves in pokemonStore.pokemon.moves">
            {{ moves.move.name }}
          </li>
        </ul>
      </div>
    </section>
  </div>
  <div v-else>
    <h3>{{ pokemonStore.message }}</h3>
  </div>
  <div>{{ pokemonStore.evolution_chain.evolves_to }}</div>
</template>
<style lang="scss">
.pokemon {
  display: flex;
}
</style>
