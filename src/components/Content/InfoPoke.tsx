import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Static from "./Static";
import MainFooter from "../Footer/MainFooter";

interface Props {
  name: string;
  id: number;
  url: string;
}

const InfoPoke: React.FC<Props> = (props) => {
  const { name, id, url } = props;
  const [image, setImage] = useState();
  const [base_exp, setBase_epx] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [type1, setType1] = useState();
  const [type2, setType2] = useState();
  const [ability1, setAbility1] = useState();
  const [ability2, setAbility2] = useState();

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log({ res });

      setImage(res.data.sprites.front_default);
      setBase_epx(res.data.base_experience);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      setAbility1(res.data.abilities[0].ability.name);
      if (res.data.abilities.length === 2) setAbility2(res.data.abilities[1].ability.name);
      setType1(res.data.types[0].type.name);
      if (res.data.types.length === 2) setType2(res.data.types[1].type.name);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-[#60bfd5] w-full px-6 mx-auto">
        <div className="flex flex-wrap px-[15px] mx-[-15px]">
          {" "}
          {/* NAME-ID-IMG */}
          <div className="basis-1/2 px-[15px] max-w-[50%]">
            <div className="bg-white flex flex-col items-center rounded-xl py-4 px-3 mb-6">
              <div className="text-center">
                <h2 className="truncate text-xl text-center font-bold mb-0">{name}</h2>
                <p className="font-bold mt-1 mb-0">{id}</p>
              </div>
              <div className="w-1/2 mx-auto my-2 rounded-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <img className="w-full" alt="poke-img" src={image} />
              </div>
              <div className="w-full flex justify-between">
                {type2 ? (
                  <>
                    <div className="bg-[green] w-[48%] justify-center items-center p-2 rounded-xl text-white font-bold text-lg">
                      <p className="mb-0 text-center">{type1}</p>
                    </div>
                    <div className="bg-[green] w-[48%] justify-center items-center p-2 rounded-xl text-white font-bold text-lg">
                      <p className="mb-0 text-center">{type2}</p>
                    </div>
                  </>
                ) : (
                  <div className="bg-[green] w-[100%] justify-center items-center p-2 rounded-xl text-white font-bold text-lg">
                    <p className="mb-0 text-center">{type1}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* OBJECTIVE */}
          <div className="basis-1/2 px-[15px] max-w-[50%]">
            <div className="bg-white py-4 rounded-xl flex flex-wrap mb-6">
              <div className="w-1/2 text-center mb-[30px]">
                <h4 className="font-bold">Height</h4>
                <p>{height}</p>
              </div>
              <div className="w-1/2 text-center mb-[30px]">
                <h4 className="font-bold">Weight</h4>
                <p>{weight}</p>
              </div>
              <div className="w-1/2 text-center mb-[30px]">
                <h4 className="font-bold">Base experience</h4>
                <p>{base_exp}</p>
              </div>
              <div className="w-1/2 text-center mb-[30px]">
                <h4 className="font-bold">Abilities</h4>
                <p>
                  {ability1}, {ability2}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STATICTIC */}
        <div className="flex bg-white mx-[15px] rounded-lg">
          <div className="flex flex-wrap justify-between py-4 px-3 w-full">
            <h4 className="w-full m-4 font-bold">Static</h4>
            <div className="flex flex-wrap justify-around w-full">
              <Static url={url} />
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default InfoPoke;
