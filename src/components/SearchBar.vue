<script>
import usePokemonStore from "@/stores/pokemon";

export default {
  props: {
    msg: { type: String, required: true },
  },
  data() {
    return {
      pokemon: "",
    };
  },
  methods: {
    search(pokemon) {
      const pokemonStore = usePokemonStore();
      pokemonStore.search(pokemon);
    },
  },
};
</script>

<template>
  <div class="search">
    <h2 class="green">{{ msg }}</h2>
    <h3>(Pode ser tanto o nome quanto o número do pokémon)</h3>
    <form
      v-on:submit.prevent="onSubmit"
      @submit="search(pokemon)"
      class="search__form"
    >
      <input v-model="pokemon" /><button type="submit" @click="search(pokemon)">
        Buscar
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.search {
  display: flex;
  flex-direction: column;
  h2,
  h3 {
    text-align: center;
  }
  &__form {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .greetings h2,
  .greetings h3 {
    text-align: left;
  }
}
</style>
