import { atom, selector } from "recoil";

export const pokeInfo = atom({
  key: "pokeInfo",
  default: [],
});

export const getPokeInfo = selector({
  key: "getPokeInfo",
  get: ({ get }) => {
    const pokemonDetails = get(pokeInfo);
    return pokemonDetails;
  },
});
