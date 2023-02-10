<script>
const EvolutionLink = () => import("@/components/EvolutionLink.vue");

export default {
  props: ["link"],
  computed: {
    hasLink() {
      const { evolves_to } = this.link;
      return evolves_to && evolves_to.length > 0;
    },
  },
};
</script>
<template>
  <section class="list__link">
    <h3>No {{ link.id }} - {{ link.name }}</h3>
    <figure class="pokemon__images">
      <img :src="link.sprites.front_default" alt="front view" />
      <figcaption>front view</figcaption>
    </figure>
  </section>
  <div v-if="hasLink" class="list">
    <div v-for="evolutions in link.evolves_to" class="list">
      <EvolutionLink :link="evolutions" />
    </div>
  </div>
</template>
