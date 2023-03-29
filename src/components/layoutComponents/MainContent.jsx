import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fullPokeList } from "../../lib/recoil/pokeList";
import { getSearchingPokemon } from "../../lib/recoil/pokeSearch";
import { getPokeRootApi } from "../../services/PokeAPI";
import PokeContact from "../PokeContact";
import PokeInfo from "../PokeInfo";
import PokeSidebar from "../PokeSidebar";

function MainContent() {
  const searchState = useRecoilValue(getSearchingPokemon);
  const [pokeList, setPokeList] = useRecoilState(fullPokeList);

  const rootUrl = import.meta.env.VITE_ROOT_URL_ALL_POKEMON;

  useEffect(() => {
    const fetchData = async () => {
      return setPokeList(await getPokeRootApi(rootUrl));
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="relative w-full flex flex-row items-start justify-start gap-x-4 container mx-auto bg-sprite-gray rounded">
        <PokeSidebar pokemonList={pokeList} />
        {searchState === false ? <PokeContact /> : <PokeInfo />}
      </div>
    </div>
  );
}

export default MainContent;
