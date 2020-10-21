import React from 'react';
import PokemonCard from '../../components/PokemonCard';
import { Grid, GridContainer } from './styled';
import { PokemonGridProps as IProps, PokemonGridState as IState, TPokemon } from './types';
import { getPokemonById } from './../../api';
import { TPokemonCard } from '../../components/PokemonCard/types';

export class PokemonGrid extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      pokemonList: [],
    };
  }

  componentDidMount() {
    this.getAllPokemon().then((pokemonList) => this.setState({ pokemonList }));
  }

  async getAllPokemon() {
    const pokemonList: TPokemonCard[] = [];
    if (!pokemonList.length) {
      const { currentPokemonList } = this.props;
      for (let i = 0; i < 7; i++) {
        const pokemon: TPokemon = await getPokemonById(currentPokemonList[i]).then((result) => result.json());
        console.log(pokemon);
        const pokemonCard: TPokemonCard = {
          name: pokemon.species.name,
          id: pokemon.id,
          imageUrl: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
          types: pokemon.types.map((type) => ({ slot: type.slot, name: type.type.name })),
        };
        pokemonList.push(pokemonCard);
      }
    }
    return pokemonList;
  }

  render () {
    return (
      <GridContainer>
        <div className="aspect-ratio-box">
          <Grid>
            {this.state.pokemonList.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
          </Grid>
        </div>
      </GridContainer>
    );
  }
}
