import axios from "axios";

export const findPoke = async (poke) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((res) => {
      const { height, id, stats, weight, sprites, name, types, moves } =
        res.data;
      return { height, id, stats, weight, sprites, name, types, moves };
    })
    .catch((err) => {
      console.log(err);
    });
};
export const findPokeSpecies = async (poke) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${poke}`)
    .then(async (res) => {
      const { id, evolution_chain } = res.data;
      return { id, evolution_chain };
    })
    .catch((err) => {
      console.log(err);
    });
};
export const findEvolutions = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      //   console.log(res.data);
      const { chain } = res.data;
      return chain;
    })
    .catch((err) => {
      console.log(err);
    });
};
