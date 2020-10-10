import React from 'react';
import { Image, ImageContainer, Source } from './styled';
import { PokemonImageProps as IProps } from './types';

const PokemonImage = ({ number, name }: IProps) => {
  const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${number}.png`;
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
