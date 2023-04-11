import { useRecoilState } from "recoil";
import { pokeInfo } from "../lib/recoil/pokeInfo";
import { searchingPokemon } from "../lib/recoil/pokeSearch";
import { getPokeValuesApi } from "../services/PokeAPI";

function PokeSidebar() {
  const [isSearchingPokemon, setIsSearchingPokemon] =
    useRecoilState(searchingPokemon);
  const rootUrl = import.meta.env.VITE_ROOT_URL_ALL_POKEMON;
  const [pokeInformation, setPokeInformation] = useRecoilState(pokeInfo);

  const getPokemonSearch = async (evt) => {
    evt.preventDefault();
    let searchInputValue = document.getElementById("searchInput");
    setPokeInformation(
      await getPokeValuesApi(rootUrl, searchInputValue.value.toLowerCase())
    );
    setIsSearchingPokemon(true);
  };

  return (
    <aside className="w-2/6 p-4 flex flex-col items-start gap-y-4 max-h-screen overflow-y-hidden justify-start">
      <form
        method="get"
        className="h-44 flex flex-col items-start w-full gap-y-4"
        onSubmit={(evt) => getPokemonSearch(evt)}
        id="pokeSearchForm"
      >
        <label htmlFor="search" className="flex items-end gap-x-1 text-xl font-bold">
          Type a Pokemon{" "}
          <span>
            <img
              src="https://i.pinimg.com/originals/bc/05/60/bc0560078e637a7edd2119abb99240da.gif"
              alt=""
              className="w-12"
            />
          </span>
        </label>
        <input
          type="text"
          name="search"
          id="searchInput"
          placeholder="Eg: articuno"
          className="bg-gray-300 rounded py-2 px-2 bg-opacity-20 w-full shadow-sm hover:bg-opacity-40 transition-opacity ease-in-out duration-150 focus:bg-opacity-60 outline-none"
        />
        <button
          type="submit"
          className="w-full py-2 rounded bg-gray-300 bg-opacity-20 shadow-sm hover:bg-opacity-40 transition-opacity ease-in-out duration-150 active:bg-opacity-60"
        >
          Search
        </button>
      </form>

      <hr className="border-black border-opacity-20 w-full" /> 

      <div className="h-screen w-full">
        <span>
          More tools to search more Pokemon content is coming out as soon as possible. I am working in more searchable items.
        </span>
      </div>
    </aside>
  );
}

export default PokeSidebar;
