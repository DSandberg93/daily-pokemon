const apiAddress = 'https://pokeapi.co/api/v2';

export const getPokemonById = (id: number) => {
  return fetch(`${apiAddress}/pokemon/${id}`);
};
