import { atom, selector } from "recoil";

export const loader = atom({
  key: "loader",
  default: false,
});

export const getLoader = selector({
  key: "getLoader",
  get: ({ get }) => {
    const isLoader = get(loader);

    return loader;
  },
});
