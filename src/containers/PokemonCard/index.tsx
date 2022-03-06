import React, { useEffect, useState } from 'react';
import { PokemonCardContainerProps as IProps, TPokemon } from './types';
import { fetchPokemon, fetchPokemonSpecies } from './actions';
import { PokemonCardContainer } from './styled';

const PokemonCard: React.FC<IProps> = ({ number, onClick, expanded, primary }) => {
  const [pokemon, setPokemon] = useState<TPokemon>();
  useEffect(() => {
    fetchPokemon(number).then((result) => setPokemon({ ...pokemon, ...result}));
    fetchPokemonSpecies(number).then((result) => console.log(result));
  }, []);

  if (!pokemon) return <div/>;

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  return (
    <PokemonCardContainer
      className={primary ? 'primary' : ''}
      primaryColor={pokemon.types.find((type) => type.slot === 1)?.type.name || ''}
      secondaryColor={pokemon.types.find((type) => type.slot === 2)?.type.name ||''}
      onClick={handleOnClick}
      hasOnClick={!!onClick}
    >
      <div className="left">
        <img src={pokemon.artwork} alt="" height="475" width="475" />
        {primary ? <h2>#{pokemon.id}: {pokemon.name}</h2> : <h3>#{pokemon.id}: {pokemon.name}</h3>}
      </div>
      {expanded &&
        <div>
          <div>
            Types: {pokemon.types.find((type) => type.slot === 1)?.type.name}{pokemon.types.length === 2 ? ` & ${pokemon.types.find((type) => type.slot === 2)?.type.name}` : ''}
          </div>
        </div>
      }
    </PokemonCardContainer>
  );
};

export default PokemonCard;