import React from 'react';
import { CardContainer } from './styled';
import { PokemonCardProps as IProps } from './types';

const formatNumber = (number: number) => {
  return `#${number < 100 ? 0 : ''}${number < 10 ? 0 : ''}${number}`;
};

const PokemonCard = ({ pokemon }: IProps) => {
  console.log(pokemon.types);
  const primaryType = pokemon.types.find((type) => type.slot === 1);
  const secondaryType = pokemon.types.find((type) => type.slot === 2);
  return (
    <CardContainer className={`pokemon-card ${primaryType?.name}${secondaryType ? `-${secondaryType.name}` : ''}`}>
      <div className="name-id">
        {pokemon.name.slice(0, 1).toUpperCase()}{pokemon.name.slice(1)} {formatNumber(pokemon.id)}
      </div>
      <img src={pokemon.imageUrl} />
    </CardContainer>
  );
};

export default PokemonCard;
