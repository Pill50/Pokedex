import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InfoPoke from "../../components/Content/InfoPoke";

const InfoPage = () => {
  const { id } = useParams<{ id: any }>();
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000").then((res) => {
      setPokedex(res.data.results);
    });
  }, []);
  if (!pokedex[id]) return <></>;
  const { name, url } = pokedex[id - 1];
  return (
    <>
      <InfoPoke name={name} id={id} url={url} />
    </>
  );
};

export default InfoPage;
