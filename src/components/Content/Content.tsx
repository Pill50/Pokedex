import React from "react";
import PokemonCollection from "./PokemonColection";
import { PokemonDetail } from "../../interface";
import SearchBar from "./SearchBar";

interface Props {
  pokemons: PokemonDetail[];
}

const Content: React.FC<Props> = (props) => {
  const { pokemons } = props;
  return (
    <>
      <SearchBar />
      <PokemonCollection pokemons={pokemons} />
    </>
  );
};

export default Content;
