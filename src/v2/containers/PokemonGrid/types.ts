import { TPokemonCard } from '../../components/PokemonCard/types';

export interface PokemonGridProps {
  currentPokemonList: number[],
}

export interface PokemonGridState {
  pokemonList: TPokemonCard[],
}

export type TPokemon = {
  species: {
    name: string,
  },
  id: number,
  types: {
    slot: number,
    type: {
      name: string,
    },
  }[],
};
