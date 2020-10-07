import React from 'react';
import { Header, DataContainer, DataEntry, Name } from './styled';
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
    <Header>Pokémon of the Day: </Header>
    <Name>{name}</Name>
    <hr />
    <DataEntry>Number: <span className="data-span">{number}</span></DataEntry>
    <DataEntry>Primary type: <span className="data-span">{primaryType}</span></DataEntry>
    <DataEntry>Secondary type: <span className="data-span">{secondaryType}</span></DataEntry>
    <DataEntry>Evolves from: <span className="data-span">{previousEvolution}</span></DataEntry>
    <DataEntry>Evolves into: <span className="data-span">{nextEvolution}</span></DataEntry>
    <DataEntry>Height: <span className="data-span">{height}</span> m</DataEntry>
    <DataEntry>Weight: <span className="data-span">{weight}</span> kg</DataEntry>
    <hr />
    <div>Source: <a href={`https://pokeapi.co/api/v2/pokemon/${number}`} target="_blank" rel="noopener noreferrer">https://pokeapi.co/api/v2/pokemon/{number}</a></div>
  </DataContainer>
;

export default PokemonData;
