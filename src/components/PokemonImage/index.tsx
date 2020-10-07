import React from 'react';
import './styles.css';
import { PokemonImageProps as IProps } from './types';

const PokemonImage = ({number, name}: IProps) => {
  let imageUrl = "https://pokeres.bastionbot.org/images/pokemon/"+number+".png"
  return(
    <div className="p-image-container">
      <img src={imageUrl} alt={number + " - " + name} className="p-image"/>
      <span className="source-hover"><span>Source: {imageUrl}</span></span>
    </div>
  )
}

export default PokemonImage;
