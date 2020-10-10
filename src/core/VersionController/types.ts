import { match } from 'react-router-dom';
import { History } from 'history';
import { TPokemonList } from '../globalTypes';

export interface VersionControllerProps {
  history: History,
  match: match<{version: string}>,
  pokemonList: TPokemonList,
}
