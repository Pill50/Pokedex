import React from "react";
import axios from "axios";
import { Pokemon, Pokemons } from "../../interface";

interface Props {
  loading: boolean;
  nextUrl: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  setNextUrl: React.Dispatch<React.SetStateAction<string>>;
}

const LoadingBtn: React.FC<Props> = (props: any) => {
  const { loading, setLoading, setPokemons, nextUrl, setNextUrl } = props;

  const nextPage = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(pokemon.url);
      setPokemons((p: any) => [...p, poke.data].sort((a, b) => a.id - b.id));
      setLoading(false);
    });
  };

  return (
    <>
      <div className="flex items-center content-around mt-6">
        <button
          className="cursor-pointer bg-lime-500 p-2 mb-2 rounded-xl text-2xl border-0 ease-in-out duration-200 hover:bg-blurGreen hover:text-[#3d405b]"
          onClick={nextPage}
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      </div>
    </>
  );
};

export default LoadingBtn;
