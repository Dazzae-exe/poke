import { atom, selector } from "recoil";

export const fullPokeList = atom({
  key: "fullPokeList",
  default: [],
});

export const getFullPokeList = selector({
  key: "getFullPokeList",
  get: ({ get }) => {
    const arrWithPokemons = get(fullPokeList);
    return arrWithPokemons;
  },
});
