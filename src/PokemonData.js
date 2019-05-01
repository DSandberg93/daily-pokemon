import React from 'react';
import './PokemonData.css';

const PokemonImage = ({name, number, primaryType, secondaryType, previousEvolution, nextEvolution, height, weight}) => {
  return(
    <div className="data-container">
      <h2>Pokemon of the Day: <span className="name-span">{name}</span></h2>
      <p>Number: <span className="data-span">{number}</span></p>
      <p>Primary type: <span className="data-span">{primaryType}</span></p>
      <p>Secondary type: <span className="data-span">{secondaryType}</span></p>
      <p>Evolves from: <span className="data-span">{previousEvolution}</span></p>
      <p>Evolves into: <span className="data-span">{nextEvolution}</span></p>
      <p>Height: <span className="data-span">{height}</span> m</p>
      <p>Weight: <span className="data-span">{weight}</span> kg</p>
    </div>
  )
}

export default PokemonImage;
