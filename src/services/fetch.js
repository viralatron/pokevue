import axios from "axios";

export const findPoke = async (poke) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((res) => {
      console.log(res.data);
      const { height, id, weight, sprites, name, types } = res.data;
      return { height, id, weight, sprites, name, types };
    })
    .catch((err) => {
      console.log(err);
    });
};
export const findPokeSpecies = async (poke) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${poke}`)
    .then(async (res) => {
      console.log(res.data);
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
      console.log(res.data);
      const { chain } = res.data;
      return chain;
    })
    .catch((err) => {
      console.log(err);
    });
};
