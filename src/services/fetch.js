import axios from "axios";

export const listPoke = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      const { next, previous, results } = res.data;
      return { next, previous, results };
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getCardPoke = async (url) => {
  return await axios
    .get(url)
    .then(async (res) => {
      const { sprites, name, id, species, types } = res.data;

      const color = await getSpeciesColor(species.url);
      return {
        sprite: sprites.other["official-artwork"].front_default,
        name,
        id,
        color,
        types,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};
export const findPoke = async (poke) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((res) => {
      const {
        height,
        id,
        stats,
        weight,
        sprites,
        name,
        types,
        moves,
        species,
      } = res.data;
      return {
        height,
        id,
        stats,
        weight,
        sprites,
        name,
        types,
        moves,
        species,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};
export const findPokeSpecies = async (poke) => {
  if (!isNaN(poke)) poke = Number(poke);
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${poke}`)
    .then(async (res) => {
      const { id, evolution_chain, color } = res.data;
      return { id, evolution_chain, color };
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
const getSpeciesColor = async (url) => {
  return await axios
    .get(url)
    .then(async (res) => {
      const { color } = res.data;

      return color.name;
    })
    .catch((err) => {
      console.log(err);
    });
};

const sortEvos = async (chain, array) => {
  for (const link of chain) {
    const data = await getEvoData(link.species.url);

    const { id, name, sprites, species } = data;
    const color = await getSpeciesColor(species.url);
    console.log(color);
    array.push({ id, name, sprites, color, evolves_to: [] });

    if (link.evolves_to?.length > 0)
      await sortEvos(link.evolves_to, array[array.length - 1].evolves_to);
  }
};
