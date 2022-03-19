import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  Redirect,
} from 'react-router-dom';
import pokemonList from 'pokemonList.json';
import { AppContainer } from './styled';
import VersionController from '../containers/VersionController';

const App = () => {
  return (
    <AppContainer className="full-height">
      <Switch>
        <Route
          path="/daily-pokemon/:version?"
          render={({ match, history }) => <VersionController match={match} history={history} pokemonList={pokemonList} />}
        />
        <Redirect to="/daily-pokemon" />
      </Switch>
    </AppContainer>
  );
};

export default withRouter(App);
