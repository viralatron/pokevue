import { defineStore } from "pinia";
import { findPokeSpecies, findEvolutions, findPoke } from "../services/fetch";

const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return { pokemon: {}, evolution_chain: {}, success: false, message: "" };
  },
  actions: {
    set(poke, chain, status, msg) {
      this.pokemon = poke;
      this.evolution_chain = chain;
      this.success = status;
      this.message = msg;
    },
    async search(poke) {
      try {
        const pokeSpecies = await findPokeSpecies(poke);
        const evolution_chain = await findEvolutions(
          pokeSpecies.evolution_chain.url
        );
        const pokemon = await findPoke(pokeSpecies.id);
        this.set(pokemon, evolution_chain, true, "");
      } catch (error) {
        this.set({}, {}, false, "Erro ao buscar Pokémon");
      }
    },
  },
});

export default usePokemonStore;
