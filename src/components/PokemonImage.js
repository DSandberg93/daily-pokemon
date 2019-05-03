import React from 'react';
import './PokemonImage.css';

const PokemonImage = ({number, name}) => {
  let imageUrl = "https://pokeres.bastionbot.org/images/pokemon/"+number+".png"
  return(
    <div className="p-image"><img src={imageUrl} alt={number + " - " + name} height="350"/></div>
  )
}

export default PokemonImage;
