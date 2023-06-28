import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [id,setId] = useState(0);

  const handleNext = () => {
    setId(id + 20);
  };
  const handlePrevious = () => {
    setId(id - 20);
  };



  useEffect(() => {
    async function loadPokemon(id) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${id}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon(id);
  }, [id]);

  return (
    <main>
      <button type="button" onClick={handlePrevious} disabled={"offset===0"}>Previous Page</button>
      <button type="button" onClick={handleNext}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
