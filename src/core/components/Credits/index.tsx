import React from 'react';
import { CreditsContainer } from './styled';

const Credits = (props: unknown) => {
  console.log(props);
  return (
    <CreditsContainer>
      <div className="title"><em>Credits</em></div>
      <ul>
        <li><em>Pokémon info: <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">pokeapi.co</a></em></li>
        <li><em>Pokémon images: <a href="https://pokeres.bastionbot.org" target="_blank" rel="noopener noreferrer">pokeres.bastionbot.org</a></em></li>
      </ul>
    </CreditsContainer>
  );
};

export default Credits;
