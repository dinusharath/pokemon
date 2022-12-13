
export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonList {
    results: Pokemon[];
    count: number;
    previous: number;
    next: number;
}
