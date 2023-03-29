import { atom, selector } from "recoil";

export const searchingPokemon = atom({
  key: "searchingPokemon",
  default: false,
});

export const getSearchingPokemon = selector({
  key: "getSearchingPokemon",
  get: ({ get }) => {
    const searchPokemon = get(searchingPokemon);

    return searchPokemon;
  },
});
