function PokeContact() {
  return (
    <div className="flex w-4/6 flex-col items-start py-4 gap-y-2">
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
      <h2>Caracteristicas</h2>
      <ul className="px-2">
        <li>{"=>"} Buscar el Pokemon que quieras buscar</li>
        <li>{"=>"} Encontrar estadisticas base del Pokemon</li>
        <li>{"=>"} Encontrar el sprite / img</li>
        <li>{"=>"} Encontrar el tipo de Pokemon</li>
      </ul>
    </div>
  );
}

export default PokeContact;
