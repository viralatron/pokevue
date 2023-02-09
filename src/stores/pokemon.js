import { defineStore } from "pinia";

const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return { pokemon: "", success: false };
  },
  actions: {
    set(poke, status) {
      this.pokemon = poke;
      this.success = status;
    },
    search(poke) {
      console.log(poke);
      this.set(poke, true);
    },
  },
});

export default usePokemonStore;
