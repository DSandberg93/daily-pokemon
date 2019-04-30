import React from 'react';
import './PokemonData.css';

const PokemonImage = ({name, number, primaryType, secondaryType}) => {
  return(
    <div className="data-container">
      <h2>Pokemon of the Day: <span className="name-span">{name}</span></h2>
    </div>
  )
}

export default PokemonImage;
