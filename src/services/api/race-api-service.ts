import { PokemonDetails } from '../../types';
import { PokemonList } from '../../types/api/list';
import { getData } from './core-api-service';

export const getPokemons = (limit: number): Promise<PokemonList> => {
    return getData('https://pokeapi.co/api/v2/pokemon', { limit: limit });
}

export const getPokemonDetails = (url: string): Promise<PokemonDetails> => {
    return getData(url);
}
