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
    <img
      :src="link.sprites.other['official-artwork'].front_default"
      alt="front view"
      class="pokemon__images"
    />
  </div>
  <ul v-if="hasLink" class="list">
    <li v-for="evolutions in link.evolves_to" class="list__link">
      <EvolutionLink :link="evolutions" />
    </li>
  </ul>
</template>
<style lang="scss">
.link__info {
  padding: 0.2rem;
  width: 12rem;
  height: 18rem;
  background-color: white;
  border-radius: 15px;
  border: 0.8rem solid white;
  position: relative;
  z-index: 1;
  .pokemon__images {
    width: 100%;
    height: auto;
  }
  h3 {
    color: #2c3e50;
    text-align: center;
  }
  &::after {
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: v-bind("link.color");
    filter: opacity(20%);
    border-radius: 15px;
  }
}
</style>
