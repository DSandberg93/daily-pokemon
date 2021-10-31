import React from 'react';
import { DataContainer } from './styled';
import { PokemonDataProps as IProps } from './types';

const PokemonData = ({
  name,
  number,
  primaryType,
  secondaryType,
  previousEvolution,
  nextEvolution,
  height,
  weight,
}: IProps) =>
  <DataContainer>
    <div className="header">Pokémon of the Day: </div>
    <div className="name">{name}</div>
    <div className="entry-container">
      <div className="data-entry">Number: <span className="data-span">{number}</span></div>
      <div className="data-entry">Primary type: <span className="data-span">{primaryType}</span></div>
      <div className="data-entry">Secondary type: <span className="data-span">{secondaryType}</span></div>
      <div className="data-entry">Evolves from: <span className="data-span">{previousEvolution}</span></div>
      <div className="data-entry">Evolves into: <span className="data-span">{nextEvolution}</span></div>
      <div className="data-entry">Height: <span className="data-span">{height}</span> m</div>
      <div className="data-entry">Weight: <span className="data-span">{weight}</span> kg</div>
    </div>
    <div className="resource-link">Source: <a href={`https://pokeapi.co/api/v2/pokemon/${number}`} target="_blank" rel="noopener noreferrer">https://pokeapi.co/api/v2/pokemon/{number} <i className="fas fa-external-link-alt"></i></a></div>
  </DataContainer>
;

export default PokemonData;
