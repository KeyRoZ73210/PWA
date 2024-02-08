import React from 'react';

function PokemonDetails({ pokemon }) {
  if (!pokemon) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
      </div>
    );
  }
}

export default PokemonDetails;
