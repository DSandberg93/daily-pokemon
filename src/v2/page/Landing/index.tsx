import React from 'react';
import { PokemonGrid } from '../../containers/PokemonGrid';
import { LandingContainer } from './styled';
import { ContainerProps as IProps, ContainerState as IState } from './types';

class Container extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.getCurrentPokemonIndexes = this.getCurrentPokemonIndexes.bind(this);
    this.state = {
      currentPokemonList: [],
    };
  }

  componentDidMount() {
    this.setState({ currentPokemonList: this.getCurrentPokemonIndexes() });
  }

  getCurrentIndex() {
    const initialDate = this.props.pokemonList.initial_date;
    const idCap = this.props.pokemonList.list.length;
    const now = new Date();
    const startDate = new Date(Date.UTC(initialDate.year, initialDate.month-1, initialDate.day));
    const daysPast = Math.floor((now.valueOf() - startDate.valueOf())/(1000 * 60 * 60 * 24)) % idCap;
    return daysPast;
  }

  getCurrentPokemonIndexes() {
    const currentIndex = this.getCurrentIndex();
    const currentPokemonList = [];
    for (let i = 0; i < 7; i++) {
      currentPokemonList.push(this.props.pokemonList.list[(currentIndex - i) % this.props.pokemonList.list.length]);
    }
    return currentPokemonList;
  }

  render() {
    return (
      <LandingContainer>
        {this.state.currentPokemonList.length &&
          <PokemonGrid currentPokemonList={this.state.currentPokemonList} />
        }
      </LandingContainer>
    );
  }
}

export default Container;
