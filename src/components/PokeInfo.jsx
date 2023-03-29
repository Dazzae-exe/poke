import { useRecoilState, useRecoilValue } from "recoil";
import { getPokeInfo, pokeInfo as PokesInfo } from "../lib/recoil/pokeInfo";
import { searchingPokemon } from "../lib/recoil/pokeSearch";

function PokeInfo() {
  const [isSearchingPokemon, setIsSearchingPokemon] =
    useRecoilState(searchingPokemon);
  const [pokesInfo, setPokesInfo] = useRecoilState(PokesInfo);
  const usePokemonSearched = useRecoilValue(getPokeInfo);

  const backHome = () => {
    const pokeSearchForm = document.getElementById("pokeSearchForm");
    setIsSearchingPokemon(false);
    setPokesInfo([]);
    return pokeSearchForm.reset();
  };

  return (
    <article className="w-4/6 max-h-screen flex flex-col items-start py-4 overflow-y-scroll overflow-x-hidden">
      {typeof usePokemonSearched === "object" ? (
        <div className="container mx-auto w-full h-full items-start flex flex-col gap-y-4">
          <button
            className="bg-gray-300 bg-opacity-20 p-2 rounded shadow-sm"
            type="button"
            onClick={backHome}
          >
            <span>Go Home</span>
          </button>
          <div className="flex gap-x-2 w-full items-center justify-start h-34">
            <img
              className="w-24 h-24"
              src={usePokemonSearched.sprites.front_default}
              alt={usePokemonSearched.name}
            />
            <div>
              <h2 className="first-letter:uppercase">
                {usePokemonSearched.name}
              </h2>
              <p className="first-letter:uppercase">
                {usePokemonSearched.types[0].type.name}
              </p>
              <span className="p-1 bg-gray-300 bg-opacity-20 rounded">{`#${usePokemonSearched.id}`}</span>
            </div>
          </div>

          <hr className="border-black w-full" />

          <div className="flex flex-col items-start w-82 h-fit gap-y-2">
            <h2>Basic stats</h2>
            <ul className="flex items-start w-full flex-wrap h-fit gap-4">
              {usePokemonSearched.stats.map((stat, idx) => (
                <li
                  key={idx.toString()}
                  className="flex flex-col items-start bg-gray-300 bg-opacity-20 p-2 rounded justify-start"
                >
                  <h3 className="first-letter:uppercase m-0">
                    {stat.stat.name.replace("-", " ")}
                  </h3>
                  <span>{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start w-82 h-fit gap-y-2">
            <h2>Type</h2>
            <ul className="flex items-start w-full flex-wrap h-fit gap-4">
              {usePokemonSearched.types.map((type, idx) => (
                <li
                  key={idx.toString()}
                  className="flex flex-col items-start bg-gray-300 bg-opacity-20 p-2 rounded justify-start"
                >
                  <span className="first-letter:uppercase m-0">
                    {type.type.name.replace("-", " ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start w-82 h-fit gap-y-2">
            <h2>Weight</h2>
            <span className="bg-gray-300 bg-opacity-20 p-2 rounded">
              {usePokemonSearched.weight} Kls
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-y-2">
          <button
            className="bg-gray-300 bg-opacity-20 p-2 rounded shadow-sm"
            type="button"
            onClick={backHome}
          >
            <span>Go Home</span>
          </button>
          <span>
            Error, you're searching something wrong. Type it correctly.
          </span>
        </div>
      )}
    </article>
  );
}

export default PokeInfo;
