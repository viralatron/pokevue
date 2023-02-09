import { defineStore } from "pinia";
import { findPokeSpecies, findEvolutions, findPoke } from "../services/fetch";

const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return { pokemon: {}, success: false };
  },
  actions: {
    set(poke, chain, status) {
      this.pokemon = poke;
      this.evolution_chain = chain;
      this.success = status;
    },
    async search(poke) {
      const pokeSpecies = await findPokeSpecies(poke);
      const evolution_chain = await findEvolutions(
        pokeSpecies.evolution_chain.url
      );
      const pokemon = await findPoke(pokeSpecies.id);
      this.set(pokemon, evolution_chain, true);
    },
  },
});

export default usePokemonStore;
