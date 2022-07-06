export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  }
}

export interface Pokemons {
  name: string;
  url: string;
}

export interface Detail {
  id: number;
  isOpened: boolean;
}

export interface PokemonDetail extends Pokemon {
  abilities?: {
      ability: string;
      name: string;
  }[];
  species?: {
    name: string,
    url: string
  }| undefined;
}[]

export interface Props {
abilities: {
    name: string;
    ability: string;
}[] | undefined;
name: string,
id: number,
image: string;
}