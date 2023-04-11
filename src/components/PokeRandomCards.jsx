const PokeRandomCards = ({ onClickFunction, randomPoke }) => {
  return (
    <div
      className="w-60 h-60 rounded-2xl bg-gray-200 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-60 flex flex-col items-center justify-center cursor-pointer shadow-sm"
      onClick={() => onClickFunction(randomPoke)}
    >
      <figure className="w-full h-4/6 flex items-center justify-center">
        {randomPoke !== null ? (
          <img
            src={randomPoke.sprites.front_default}
            alt="..."
            className="w-24 h-24"
          />
        ) : (
          "loading..."
        )}
      </figure>
      <h3 className="w-full h-2/6 text-center first-letter:uppercase">
        {randomPoke !== null ? randomPoke.name : "Loading"}
      </h3>
    </div>
  );
};

export default PokeRandomCards;
