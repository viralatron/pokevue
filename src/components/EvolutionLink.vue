<script>
const EvolutionLink = () => import("@/components/EvolutionLink.vue");
import usePokemonStore from "@/stores/pokemon";

export default {
  props: ["link"],
  computed: {
    hasLink() {
      const { evolves_to } = this.link;
      return evolves_to && evolves_to.length > 0;
    },
  },
  methods: {
    search(pokemon) {
      const pokemonStore = usePokemonStore();
      pokemonStore.search(pokemon);
      this.$router.push("/pokemon/" + pokemon);
      window.scrollTo(0, 0);
    },
  },
};
</script>
<template>
  <div class="link__info" @click="search(link.id)">
    <h3>
      No {{ link.id }} - {{ link.name[0].toUpperCase() + link.name.substr(1) }}
    </h3>
    <figure class="pokemon__images">
      <img :src="link.sprites.front_default" alt="front view" />
    </figure>
  </div>
  <ul v-if="hasLink" class="list">
    <li v-for="evolutions in link.evolves_to" class="list__link">
      <EvolutionLink :link="evolutions" />
    </li>
  </ul>
</template>
