import React from 'react';
import { LandingContainer } from './styled';
import { ContainerProps as IProps, ContainerState as IState } from './types';
import PokemonGrid from 'containers/PokemonGrid';

class Container extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <LandingContainer>
        <PokemonGrid />
      </LandingContainer>
    );
  }
}

export default Container;
