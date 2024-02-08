import React, { useEffect, useState } from 'react';
import PokemonDetails from './PokemonDetails';
import { Link } from 'react-router-dom';

function PokemonList(props) {
  const [pokemonByGeneration, setPokemonByGeneration] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const totalGenerations = 8;
        let allGenerationsPokemon = {};

        for (let i = 1; i <= totalGenerations; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/generation/${i}`);

          const data = await response.json();
          const firstFivePokemon = data.pokemon_species.slice(0, 5);

          const pokemons = await Promise.all(firstFivePokemon.map(async (pokemon) => {
            const pokemonDetails = await fetchPokemonDetails(pokemon.name);
            return {
              name: pokemon.name,
              imageUrl: pokemonDetails.sprites.front_default,
            };
          }));

          allGenerationsPokemon[i] = pokemons;
        }

        setPokemonByGeneration(allGenerationsPokemon);
      } catch (error) {
        console.error('Erreur dans la liste des pokémon:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const handlePokemonClick = async (pokemon) => {
    try {
      const pokemonDetails = await fetchPokemonDetails(pokemon.name);
      setSelectedPokemon(pokemonDetails);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du Pokémon:', error);
    }
  };

  const fetchPokemonDetails = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error('Pas de réponse');
    }
    const data = await response.json();
    return data;
  };

  return (
    <div>
      {Object.keys(pokemonByGeneration).map((generation, index) => (
        <div key={index}>
          <h2>Generation {generation}</h2>
          <ul>
            {pokemonByGeneration[generation].map((pokemon, pokemonIndex) => (
            <Link to={`/${pokemon.name}`} onClick={() => handlePokemonClick(pokemon)}>
            <li key={pokemonIndex}>
              <img src={pokemon.imageUrl} alt={pokemon.name} />
                {pokemon.name}
            </li>
              </Link>
))}
          </ul>
        </div>
      ))}
      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
    </div>
  );
}

export default PokemonList;
