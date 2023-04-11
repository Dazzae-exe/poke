import { useState } from "react";
import { useEffect } from "react";

import { useRecoilState } from "recoil";
import { searchingPokemon } from "../lib/recoil/pokeSearch";
import { pokeInfo } from "../lib/recoil/pokeInfo";

import { getPokeValuesApi } from "../services/PokeAPI";
import PokeRandomCards from "./PokeRandomCards";

function PokeContact() {
  const rootUrl = import.meta.env.VITE_ROOT_URL_ALL_POKEMON;
  const randomPokemon = () => {
    const randomNumberOfPokemon = Math.floor(Math.random() * 1010);
    return randomNumberOfPokemon;
  };

  const [randomPokeOne, setRandomPokeOne] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      return setRandomPokeOne(await getPokeValuesApi(rootUrl, randomPokemon()));
    };

    fetchData();
  }, []);

  const [randomPokeTwo, setRandomPokeTwo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      return setRandomPokeTwo(await getPokeValuesApi(rootUrl, randomPokemon()));
    };

    fetchData();
  }, []);
  
  const [randomPokeThree, setRandomPokeThree] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      return setRandomPokeThree(
        await getPokeValuesApi(rootUrl, randomPokemon())
      );
    };

    fetchData();
  }, []);

  const [isSearchingPokemon, setIsSearchingPokemon] = useRecoilState(searchingPokemon);
  const [pokeInformation, setPokeInformation] = useRecoilState(pokeInfo);
  const getPokemonRandomSearch = async (randomPoke) => {
    setPokeInformation(await getPokeValuesApi(rootUrl, randomPoke.name));
    setIsSearchingPokemon(true);
  };

  return (
    <div className="flex w-4/6 flex-col items-start py-4 gap-y-6">
      <div className="w-full h-fit flex flex-col items-start justify-start">
        <div className="flex items-center justify-start gap-x-2">
          <h2>Busca tu Pokemón</h2>
          <img
            src="https://i.pinimg.com/originals/de/40/2f/de402f95b9c6b34485cfa8acbadc4365.gif"
            alt="..."
            className="w-12 h-12"
          />
        </div>
        <p>
          Utilizando la API Gratuita de{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            className="text-red-500 hover:text-red-600"
          >
            Poke-API
          </a>{" "}
          estoy realizando este proyecto personal para practicar varios
          conocimientos e integrar librerias que me parecen interesantes.
        </p>
      </div>

      <div className="w-full h-fit px-1.5 pb-5 flex flex-col items-start justify-start bg-gray-200 bg-opacity-30 rounded-2xl">
        <h2>Caracteristicas</h2>
        <ul className="px-2">
          <li>Utilizamos el API de <strong>Poke-API.</strong></li>
          <li>Encuentra el Pokemon que estas buscando en tu Pokedex.</li>
          <li>Encontrar caracteristicas del Pokemon el cual estas buscando en la Pokedex.</li>
          <li>Visualizar imagen u/o sprite del Pokemon buscado.</li>
          <li>En el home page puedes ver resultados variados de pokemones en la Pokedex.</li>
        </ul>
      </div>

      <div className="w-full h-fit flex flex-col items-start justify-start gap-y-4">
        <h2>Random Pokedex Picks</h2>
        <div className="flex items-center w-full h-full justify-between">
          <PokeRandomCards
            onClickFunction={getPokemonRandomSearch}
            randomPoke={randomPokeOne}
          />
          <PokeRandomCards
            onClickFunction={getPokemonRandomSearch}
            randomPoke={randomPokeTwo}
          />
          <PokeRandomCards
            onClickFunction={getPokemonRandomSearch}
            randomPoke={randomPokeThree}
          />
        </div>
      </div>
    </div>
  );
}

export default PokeContact;
