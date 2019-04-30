import React, { Component, } from 'react';
import PokemonData from './PokemonData';
import PokemonImage from './PokemonImage';
import './PokemonContainer.css';

class PokemonContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: 2,
      primaryType: '',
      secondaryType: '',
      previousEvolution: 'None',
      nextEvolution: 'None',
      height: '0',
      weight: '0'
    }
  }

  componentDidMount() {
    let name, primaryType, secondaryType, height, weight = 'None';
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
      height = data.height;
      weight = data.weight;
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
            <PokemonData name={this.state.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonContainer;
