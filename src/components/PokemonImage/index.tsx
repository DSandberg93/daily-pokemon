import React from 'react';
import { numberToString } from 'utils/parsers';
import { Image, ImageContainer, Source } from './styled';
import { PokemonImageProps as IProps } from './types';

const PokemonImage = ({ number, name }: IProps) => {
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numberToString(number)}.png`;
  return (
    <ImageContainer>
      <Image src={imageUrl} alt={`${number} - ${name}`} />
      <Source>
        <span>Source: {imageUrl}</span>
      </Source>
    </ImageContainer>
  );
};

export default PokemonImage;
