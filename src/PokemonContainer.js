import React, { Component, } from 'react';
import PokemonData from './PokemonData';
import PokemonImage from './PokemonImage';
import './PokemonContainer.css';
import pokemonList from './pokemonList.json';

const calculatePokemonNumber = (initialDate, numberList) => {
  let iDate = new Date(Date.UTC(initialDate.year, initialDate.month-1, initialDate.day));
  let cDate = new Date();
  cDate = new Date(Date.UTC(cDate.getFullYear(), cDate.getMonth(), cDate.getDate()));
  let chosenNumber = numberList[Math.floor((cDate-iDate)/(1000 * 60 * 60 * 24))];
  return (chosenNumber);
}

class PokemonContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: calculatePokemonNumber(pokemonList.initial_date, pokemonList.list),
      primaryType: '',
      secondaryType: 'N/A',
      previousEvolution: 'N/A',
      nextEvolution: 'N/A',
      height: '0',
      weight: '0'
    }
  }

  componentDidMount() {
    let name = 'N/A';
    let primaryType = 'N/A';
    let secondaryType = 'N/A';
    let height = 'N/A';
    let weight = 'N/A';
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.number + '/')
    .then(results => {
      return results.json();
    })
    .then(data => {
      for (let type in data.types) {
        if (data.types[type].slot === 2) {
          secondaryType = data.types[type].type.name;
        } else {
          primaryType = data.types[type].type.name;
        }
      }
      height = data.height/10;
      weight = data.weight/10;
      name = data.name;
      this.setState({name: name, height: height, weight: weight, secondaryType: secondaryType, primaryType: primaryType});
    });
  }


  render() {
    return(
      <div className="p-container">
        <div className="row">
          <div className="col-md-6 align-right">
            <PokemonImage name={this.state.name} number={this.state.number} />
          </div>
          <div className="col-md-6">
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
    );
  }
}

export default PokemonContainer;
