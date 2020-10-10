import React from 'react';
import PokemonContainer from '../../v1/containers/PokemonContainer';
import Landing from './../../v2/page/Landing';
import DropDown from '../components/DropDown';
import { VersionControllerProps as IProps } from './types';

const VersionController = ({ pokemonList, match, history }: IProps) => {
  const versions = ['v1', 'v2'];
  const defaultVersionIndex = 1;
  const { params: { version } } = match;
  if (version && !versions.includes(version)) {
    history.replace('/daily-pokemon');
  }
  return (
    <div>
      <DropDown
        right
        options={versions}
        value={version ? version : versions[defaultVersionIndex]}
        onClick={(versionIndex: number) => {
          if (version !== versions[versionIndex]) {
            history.push(`/daily-pokemon/${versions[versionIndex]}`);
          }
        }}
      />
      {version === 'v1' && <PokemonContainer pokemonList={pokemonList} />}
      {version === 'v2' && <Landing pokemonList={pokemonList} />}
      {!version && <Landing pokemonList={pokemonList} />}
    </div>
  );
};

export default VersionController;
