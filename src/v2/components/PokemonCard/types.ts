export interface PokemonCardProps {
  pokemon: TPokemonCard,
}

export type TPokemonCard = {
  name: string,
  id: number,
  imageUrl: string,
  types: {
    slot: number,
    name: string,
  }[],
};
