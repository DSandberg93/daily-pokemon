import React from 'react';
import './styles.css';
import { PokemonDataProps as IProps } from './types';

const PokemonData = ({name, number, primaryType, secondaryType, previousEvolution, nextEvolution, height, weight}: IProps) => {
  return(
    <div className="data-container">
      <h2 className="p-name">Pokémon of the Day: </h2>
      <span className="name-span">{name}</span>
      <hr />
      <p className="data-entry">Number: <span className="data-span">{number}</span></p>
      <p className="data-entry">Primary type: <span className="data-span">{primaryType}</span></p>
      <p className="data-entry">Secondary type: <span className="data-span">{secondaryType}</span></p>
      <p className="data-entry">Evolves from: <span className="data-span">{previousEvolution}</span></p>
      <p className="data-entry">Evolves into: <span className="data-span">{nextEvolution}</span></p>
      <p className="data-entry">Height: <span className="data-span">{height}</span> m</p>
      <p className="data-entry">Weight: <span className="data-span">{weight}</span> kg</p>
      <hr />
      <p>Source: <a href={"https://pokeapi.co/api/v2/pokemon/"+number} target="_blank" rel="noopener noreferrer">https://pokeapi.co/api/v2/pokemon/{number}</a></p>
    </div>
  )
}

export default PokemonData;
