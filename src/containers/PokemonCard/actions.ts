import { TPokemonResponse, TPokemonSpeciesResponse } from './types';

export async function fetchPokemon (number: number): Promise<TPokemonResponse> {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
  const { name, sprites: { other }, height, weight, types, id } = await result.json();
  return {
    artwork: other['official-artwork'].front_default,
    name,
    types,
    id,
    height,
    weight,
  };
}

export async function fetchPokemonSpecies(number: number): Promise<TPokemonSpeciesResponse> {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}/`);
  const results = await result.json();
  return results;
}