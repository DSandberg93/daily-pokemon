import React, { useState } from 'react';
import { Wrapper, ExpandedCardCover } from './styled';
import PokemonCard from 'containers/PokemonCard';
import pokemonList from 'pokemonList.json';

const { initial_date, list } = pokemonList;
const initialDate = new Date(initial_date.year, initial_date.month - 1, initial_date.day);
const FULL_DAY = 24 * 60 * 60 * 1000;
const differenceToday = Math.floor(Date.now() / FULL_DAY) - Math.floor(initialDate.valueOf() / FULL_DAY);

const PokemonGrid = () => {
  const [currentPokemon, setCurrentPokemon] = useState<number>();
  const pokemonElements: JSX.Element[] = [];
  for (let i = 0; i < 7; i++) {
    const number = list[(differenceToday - i) % list.length];
    pokemonElements.push(<PokemonCard key={number} primary={i === 0} number={number} onClick={() => setCurrentPokemon(number)} />);
  }

  return (
    <div>
      <h1>Daily Pokemon</h1>
      <Wrapper>
        {pokemonElements}
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