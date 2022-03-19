export interface PokemonCardContainerProps {
  number: number,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  expanded?: boolean,
  primary?: boolean,
}

export type TPokemonResponse = {
  artwork: string,
  name: string,
  types: {
    slot: number,
    type: {
      name: string,
      url: string,
    },
  }[],
  id: string,
  height: any,
  weight: any,
};

export type TPokemonSpeciesResponse= {

};

export type TPokemon = TPokemonResponse & TPokemonSpeciesResponse;
