import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PokemonCardContainer from 'containers/PokemonCard/v1';
import Landing from 'pages/Landing';
import DropDown from 'components/DropDown';
import { VersionControllerProps as IProps } from './types';

const VersionController = ({ pokemonList, match, history }: IProps) => {
  const versions = ['v1', 'v2'];
  const { params: { version } } = match;
  return (
    <div className="full-height">
      <DropDown
        right
        options={versions}
        value={version || 'v2'}
        onClick={(versionIndex: number) => {
          if (version !== versions[versionIndex]) {
            history.push(`/daily-pokemon/${versions[versionIndex]}`);
          }
        }}
      />
      <Switch>
        <Route
          path={'/daily-pokemon/v1'}
          exact
          render={() => <PokemonCardContainer pokemonList={pokemonList} />}
        />
        <Route
          path={['/daily-pokemon/v2', '/daily-pokemon']}
          exact
          render={() => <Landing pokemonList={pokemonList} />}
        />
        <Redirect to="/daily-pokemon" />
      </Switch>
    </div>
  );
};

export default VersionController;
