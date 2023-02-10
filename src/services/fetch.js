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
    .then(async (res) => {
      const { chain } = res.data;
      let arr = [];
      await sortEvos([chain], arr);
      return arr;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEvoData = async (url) => {
  return await axios
    .get(url)
    .then(async (res) => {
      const { id } = res.data;

      const poke = await findPoke(id);
      return poke;
    })
    .catch((err) => {
      console.log(err);
    });
};

// digamos que a gamefreak resolva mexer nas regras de evolução
// e cada pokémon independente do nível de hierarquia possa ter mais de uma evolução...
const sortEvos = async (chain, array) => {
  for (const link of chain) {
    const data = await getEvoData(link.species.url);
    const { id, name, sprites } = data;
    array.push({ id, name, sprites, evolves_to: [] });

    if (link.evolves_to?.length > 0)
      await sortEvos(link.evolves_to, array[array.length - 1].evolves_to);
  }
};
