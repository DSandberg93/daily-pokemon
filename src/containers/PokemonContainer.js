import React, { Component, } from 'react';
import PokemonData from '../components/PokemonData';
import PokemonImage from '../components/PokemonImage';
import './PokemonContainer.css';
import './TypeStyling.css'
import pokemonList from '../pokemonList.json';
import Tilt from 'react-tilt';


class PokemonContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: 'N/A',
      number: this.calculatePokemonNumber(pokemonList.initial_date, pokemonList.list),
      primaryType: 'N/A',
      secondaryType: 'N/A',
      previousEvolution: 'N/A',
      nextEvolution: 'N/A',
      height: 'N/A',
      weight: 'N/A'
    }
  }

  calculatePokemonNumber(initialDate, numberList) {
    let iDate = new Date(Date.UTC(initialDate.year, initialDate.month-1, initialDate.day));
    let cDate = new Date();
    // let cDate = new Date(2019, 4, 23);
    cDate = new Date(Date.UTC(cDate.getFullYear(), cDate.getMonth(), cDate.getDate()));
    let chosenNumber = numberList[Math.floor((cDate-iDate)/(1000 * 60 * 60 * 24))];
    return (chosenNumber);
  }

  fetchPokemon(number) {
    let name = 'N/A';
    let primaryType = 'N/A';
    let secondaryType = 'N/A';
    let height = '0';
    let weight = '0';
    return(fetch('https://pokeapi.co/api/v2/pokemon/' + number + '/')
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
      })
    )
  }

  getNextEvolution(number) {
    if (number < pokemonList.list.length) {
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + (number+1) + '/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        if (data.evolves_from_species && data.evolves_from_species.name === this.state.name) {
          this.setState({nextEvolution: data.name})
        }
      })
    }
  }

  getPrevEvolution(number) {
    if (number > 1) {
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + (number) + '/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        if (data.evolves_from_species) {
          this.setState({previousEvolution: data.evolves_from_species.name})
        }
      })
    }
  }

  componentDidMount() {
    let pData = this.fetchPokemon(this.state.number);
    pData.then(() => {
      this.getPrevEvolution(this.state.number);
      this.getNextEvolution(this.state.number);
    });
  }

  render() {
    return(
      <div className={"p-container " + this.state.primaryType + (this.state.secondaryType !== "N/A" ? "-" + this.state.secondaryType : "")}>
        <Tilt options={{ max: 20 }}>
          <div className="p-aligner">
            <div className="row">
              <div className="col-md-6">
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
        </Tilt>
      </div>
    );
  }
}

export default PokemonContainer;
