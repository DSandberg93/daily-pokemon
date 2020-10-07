export interface PokemonContainerProps {

}

export interface PokemonContainerState {
  name: string,
  number: number,
  primaryType: string,
  secondaryType: string,
  previousEvolution: string,
  nextEvolution: string,
  height: string,
  weight: string,
}

export type TDate = {
  year: number,
  month: number,
  day: number,
};
