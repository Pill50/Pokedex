import React from "react";
import { Link } from "react-router-dom";
import { PokemonDetail } from "../../interface";

interface Props {
  pokemons: PokemonDetail[];
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons } = props;

  return (
    <>
      <section className="color-[#3d405b] mt-8 font-semibold flex justify-center items-center flex-wrap">
        {pokemons.map((pokemon, index) => {
          return (
            <div className="bg-white color-[#3d405b] flex flex-col m-2 rounded-xl" key={index}>
              <Link to={`/pokemon/${pokemon.id}`}>
                <div>
                  <section className="flex cursor-pointer w-[130px] flex-wrap bg-[#f4f1de] m-4 px-4 rounded-xl justify-center items-center">
                    <p className="mt-2">{pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt="pokemon" />
                    <p className="mt-2">{pokemon.name}</p>
                  </section>
                </div>
              </Link>
              <label className="relative flex items-center mx-auto mb-5 cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Captured</span>
              </label>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonCollection;
