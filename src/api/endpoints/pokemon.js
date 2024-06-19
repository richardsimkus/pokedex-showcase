import { get } from "../util/rawApi.js";

export const getPokemon = async (identifier) =>
  get(`pokemon/${identifier}`).then((res) => res);

export const getPokemonList = async () =>
  get(`pokemon`).then((res) => res.results);

export const getRandomPokemonList = async () => {
  const pokemonList = [];
  for (let i = 1; i < 13; i++) {
    const id = Math.floor(Math.random() * 999);
    pokemonList.push(getPokemon(id));
  }
  return Promise.all(pokemonList);
};

export const getRandomPokemon = async () => {
  const id = Math.floor(Math.random() * 999);
  return getPokemon(id);
};
