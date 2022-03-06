import React, { useState } from 'react';
import { Wrapper, ExpandedCardCover } from './styled';
import PokemonCard from 'containers/PokemonCard';

const PokemonGrid = () => {
  const [currentPokemon, setCurrentPokemon] = useState<number>();
  return (
    <div>
      <h1>Daily Pokemon</h1>
      <Wrapper>
        <PokemonCard primary number={123} onClick={() => setCurrentPokemon(123)}  />
        <PokemonCard number={321} onClick={() => setCurrentPokemon(321)} />
        <PokemonCard number={456} onClick={() => setCurrentPokemon(456)} />
        <PokemonCard number={654} onClick={() => setCurrentPokemon(654)} />
        <PokemonCard number={789} onClick={() => setCurrentPokemon(789)} />
        <PokemonCard number={879} onClick={() => setCurrentPokemon(879)} />
        <PokemonCard number={147} onClick={() => setCurrentPokemon(147)} />
      </Wrapper>
      <ExpandedCardCover
        className="expanded-card-cover"
        expanded={!!currentPokemon}
        onClick={(e) => {
          if ((e.target as HTMLElement).classList.contains('expanded-card-cover')) {
            setCurrentPokemon(undefined);
          }
        }}
      >
        <div className="expanded-card">
          {currentPokemon &&
            <PokemonCard number={currentPokemon} expanded primary />
          }
        </div>
      </ExpandedCardCover>
    </div>
  );
};

export default PokemonGrid;