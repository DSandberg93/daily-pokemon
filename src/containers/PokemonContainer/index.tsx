import React, { Component, } from 'react';
import PokemonData from 'components/PokemonData';
import PokemonImage from 'components/PokemonImage';
import { PokemonContainerProps as IProps, PokemonContainerState as IState, TDate } from './types';
import { PContainer } from './styled';

class PokemonContainer extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = {
      name: 'N/A',
      number: this.calculatePokemonNumber(props.pokemonList.initial_date, props.pokemonList.list, props.pokemonList.unique_count),
      primaryType: 'N/A',
      secondaryType: 'N/A',
      previousEvolution: 'N/A',
      nextEvolution: 'N/A',
      height: 'N/A',
      weight: 'N/A',
    };
  }

  componentDidMount () {
    const pData = this.fetchPokemon(this.state.number);
    pData.then(() => {
      this.getPrevEvolution(this.state.number);
      this.getNextEvolution(this.state.number);
    });
  }

  calculatePokemonNumber (initialDate: TDate, numberList: number[], uniqueCount: number) {
    const iDate = new Date(Date.UTC(initialDate.year, initialDate.month-1, initialDate.day));
    let cDate = new Date();
    cDate = new Date(Date.UTC(cDate.getFullYear(), cDate.getMonth(), cDate.getDate()));
    const chosenNumber = numberList[Math.floor((cDate.getTime() - iDate.getTime())/(1000 * 60 * 60 * 24)) % uniqueCount];
    return chosenNumber;
  }

  async fetchPokemon (number: number) {
    let name = 'N/A';
    let primaryType = 'N/A';
    let secondaryType = 'N/A';
    let height = '0';
    let weight = '0';
    return fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        for (const type in data.types) {
          if (data.types[type].slot === 2) {
            secondaryType = data.types[type].type.name;
          } else {
            primaryType = data.types[type].type.name;
          }
        }
        height = `${data.height/10}`;
        weight = `${data.weight/10}`;
        name = data.name;
        this.setState({name: name, height: height, weight: weight, secondaryType: secondaryType, primaryType: primaryType});
      })
    ;
  }

  getNextEvolution (number: number) {
    if (number < this.props.pokemonList.list.length) {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${number + 1}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        if (data.evolves_from_species && data.evolves_from_species.name === this.state.name) {
          this.setState({nextEvolution: data.name});
        }
      });
    }
  }

  getPrevEvolution (number: number) {
    if (number > 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        if (data.evolves_from_species) {
          this.setState({previousEvolution: data.evolves_from_species.name});
        }
      });
    }
  }

  render () {
    return (
      <PContainer className={`${this.state.primaryType}${this.state.secondaryType !== 'N/A' ? `-${this.state.secondaryType}` : ''}`}>
        <div className="container">
          <div className="row p-aligner">
            <div className="col-md-5">
              <PokemonImage name={this.state.name} number={this.state.number} />
            </div>
            <div className="col-md-6 offset-md-1">
              <PokemonData
                name={this.state.name}
                number={this.state.number}
                primaryType={this.state.primaryType}
                secondaryType={this.state.secondaryType}
                previousEvolution={this.state.previousEvolution}
                nextEvolution={this.state.nextEvolution}
                height={this.state.height}
                weight={this.state.weight}
              />
            </div>
          </div>
        </div>
      </PContainer>
    );
  }
}

export default PokemonContainer;
