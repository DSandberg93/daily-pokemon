import React from 'react';
import { LandingContainer } from './styled';
import { ContainerProps as IProps, ContainerState as IState } from './types';

class Container extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <LandingContainer>
        Version 2
      </LandingContainer>
    );
  }
}

export default Container;
