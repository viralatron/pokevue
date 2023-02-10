<script setup>
import usePokemonStore from "@/stores/pokemon";
import EvolutionLink from "@/components/EvolutionLink.vue";

const pokemonStore = usePokemonStore();
</script>
<template>
  <div v-if="pokemonStore.success === true" class="pokemon">
    <div class="pokemon__info">
      <figure class="pokemon__images">
        <img
          :src="pokemonStore.pokemon.sprites.front_default"
          alt="front view"
        />
        <figcaption>front view</figcaption>
        <img :src="pokemonStore.pokemon.sprites.back_default" alt="back view" />
        <figcaption>back view</figcaption>
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
          <ul class="inline">
            <li v-for="types in pokemonStore.pokemon.types" class="inline-pill">
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
          <ul class="inline">
            <li v-for="moves in pokemonStore.pokemon.moves" class="inline-pill">
              {{ moves.move.name }}
            </li>
          </ul>
        </div>
      </section>
    </div>

    <section class="pokemon__evolution">
      <h2>Evolution Chart</h2>
      <div v-for="link in pokemonStore.evolution_chain" class="list">
        <EvolutionLink :link="link" />
      </div>
    </section>
  </div>
  <div v-else>
    <h3>{{ pokemonStore.message }}</h3>
  </div>
</template>
<style lang="scss">
.pokemon {
  display: flex;
  flex-direction: column;
  &__info {
    display: flex;
  }
  .inline-pill {
    display: inline-block;
    padding: 0.2rem 0.5rem;
    background-color: #2c3e50;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
}
</style>
