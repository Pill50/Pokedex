import { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { Pokemon, Pokemons } from "../../interface";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/MainFooter";
import LoadingBtn from "../../components/Footer/LoadingBtn";
import MainFooter from "../../components/Footer/MainFooter";

const Homepage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(nextUrl);
      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(pokemon.url);
        setPokemons((p) => [...p, poke.data].sort((a, b) => a.id - b.id));
        setLoading(false);
      });
    };
    getPokemon();
  }, []);

  return (
    <>
      <div className="flex items-center flex-col mx-8 my-4 h-screen">
        <Header />
        <Content pokemons={pokemons} />
        <LoadingBtn
          loading={loading}
          setLoading={setLoading}
          setPokemons={setPokemons}
          nextUrl={nextUrl}
          setNextUrl={setNextUrl}
        />
        <MainFooter />
      </div>
    </>
  );
};

export default Homepage;
