import { createSlice } from "@reduxjs/toolkit";
import {
  getPokemonList,
  getRandomPokemonList,
} from "src/api/endpoints/pokemon.js";

const initialPokemonList = async () => {
  if (localStorage.getItem("firstPokemonList")) {
    return JSON.parse(localStorage.getItem("firstPokemonList"));
  } else {
    const pokemonList = await getPokemonList();
    console.log(pokemonList);
    localStorage.setItem("firstPokemonList", JSON.stringify(pokemonList));
    return pokemonList;
  }
};
const randomPokemonList = async () => {
  if (localStorage.getItem("randomPokemonList")) {
    return JSON.parse(localStorage.getItem("randomPokemonList"));
  } else {
    const pokemonList = await getRandomPokemonList();
    localStorage.setItem("randomPokemonList", JSON.stringify(pokemonList));
    return pokemonList;
  }
};

const initialState = async () => ({
  favoritePokemon: [],
  pokemonList: await initialPokemonList(),
  randomPokemonList: await randomPokemonList(),
  recentlyViewedPokemon: [],
});

export const pokemonSlice = createSlice({
  initialState: await initialState(),
  name: "pokemon",
  reducers: {
    addFavouritePokemon: (state, { payload }) => {
      state.favoritePokemon.push(payload);
    },
    addRecentlyViewedPokemon: (state, { payload: { pokemon } }) => {
      state.recentlyViewedPokemon.push(pokemon);
    },
    removeFavouritePokemon: (state, { payload }) => {
      state.favoritePokemon = state.favoritePokemon.filter(
        (pokemon) => pokemon !== payload,
      );
    },
  },
});

export const {
  addFavouritePokemon,
  addRecentlyViewedPokemon,
  removeFavouritePokemon,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
