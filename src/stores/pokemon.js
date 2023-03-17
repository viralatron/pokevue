import { defineStore } from "pinia";
import {
  findPokeSpecies,
  findEvolutions,
  findPoke,
  listPoke,
} from "../services/fetch";

const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return {
      pokemon: {},
      evolution_chain: {},
      success: false,
      message: "",
      list: {
        prev: "",
        next: "",
        results: [],
      },
    };
  },
  actions: {
    set(poke, chain, status, msg, list) {
      this.pokemon = poke;
      this.evolution_chain = chain;
      this.success = status;
      this.message = msg;
      this.list = list;
    },
    async search(poke) {
      try {
        const pokeSpecies = await findPokeSpecies(poke);
        const evolution_chain = await findEvolutions(
          pokeSpecies.evolution_chain.url
        );
        const pokemon = await findPoke(pokeSpecies.id);
        this.set(pokemon, evolution_chain, true, "", this.list);
      } catch (error) {
        this.set({}, {}, false, "Error searching Pokémon", this.list);
      }
    },
    async listPokemon(url = "https://pokeapi.co/api/v2/pokemon/") {
      try {
        const { next, previous, results } = await listPoke(url);
        const currResults = [...this.list.results];
        currResults.push(...results);

        this.list = {
          prev: previous,
          next,
          results: currResults,
        };
      } catch (error) {
        await this.set({}, {}, false, "Error listing Pokémons", {});
      }
    },
  },
});

export default usePokemonStore;
