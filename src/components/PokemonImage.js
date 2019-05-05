import React from 'react';
import './PokemonImage.css';

const PokemonImage = ({number, name}) => {
  let imageUrl = "https://pokeres.bastionbot.org/images/pokemon/"+number+".png"
  return(
    <div className="p-image-container">
      <img src={imageUrl} alt={number + " - " + name} className="p-image"/>
      <span className="source-hover"><span>Source: {imageUrl}</span></span>
    </div>
  )
}

export default PokemonImage;
