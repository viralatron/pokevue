<script>
import usePokemonStore from "@/stores/pokemon";

export default {
  data() {
    return {
      pokemon: "",
    };
  },
  methods: {
    search(pokemon) {
      const pokemonStore = usePokemonStore();
      pokemonStore.search(pokemon);
      this.$router.push("/pokemon/" + this.pokemon);
    },
  },
};
</script>

<template>
  <div class="search">
    <form
      v-on:submit.prevent="onSubmit"
      @submit="search(pokemon)"
      class="search__form"
    >
      <input
        v-model="pokemon"
        type="text"
        placeholder="insira o nome ou Nº do pokemon"
      /><button type="submit" @click="search(pokemon)">Search</button>
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
  margin-bottom: 2rem;
  h2,
  h3 {
    text-align: center;
  }
  &__form {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    input[type="text"] {
      padding: 0.4rem 0.6rem;
      border: 0px;
      border-radius: 10px;
      margin-right: 0.5rem;
    }
    button[type="submit"] {
      padding: 0.4rem 0.6rem;
      border: 0px;
      border-radius: 10px;
      background-color: #41b883;
      cursor: pointer;
      font-weight: 600;
    }
  }
}

@media (min-width: 1024px) {
  .greetings h2,
  .greetings h3 {
    text-align: left;
  }
}
</style>
