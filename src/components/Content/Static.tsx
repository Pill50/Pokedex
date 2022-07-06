import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  url: string;
}

const Static: React.FC<Props> = (props) => {
  const { url } = props;
  const [hp, setHp] = useState();
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const [special_attack, setSpecial_attack] = useState();
  const [special_defense, setSpecial_defense] = useState();
  const [speed, setSpeed] = useState();
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.moves);
      setHp(res.data.stats[0].base_stat);
      setAttack(res.data.stats[1].base_stat);
      setDefense(res.data.stats[2].base_stat);
      setSpecial_attack(res.data.stats[3].base_stat);
      setSpecial_defense(res.data.stats[4].base_stat);
      setSpeed(res.data.stats[5].base_stat);
    });
  }, [url]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-full mx-auto">
        <div className="w-40">
          <div className="h-52 bg-[rgba(0,0,0,.1)] relative rounded">
            <div className="bg-[green] w-full absolute bottom-0 r-0" style={{ height: `${hp}px` }}></div>
            <div className="w-full absolute bottom-0 flex justify-center">
              <p className="text-white font-bold text-sm my-4 text-center">{hp}</p>
            </div>
          </div>
          <p className="truncate mb-0 mt-2 text-center text-lg">Hp</p>
        </div>
        <div className="w-40">
          <div className="h-52 bg-[rgba(0,0,0,.1)] relative rounded">
            <div className="bg-[green] w-full absolute bottom-0 r-0" style={{ height: `${attack}px` }}></div>
            <div className="w-full absolute bottom-0 flex justify-center">
              <p className="text-white font-bold text-sm my-4 text-center">{attack}</p>
            </div>
          </div>
          <p className="truncate mb-0 mt-2 text-center text-lg">Attack</p>
        </div>
        <div className="w-40">
          <div className="h-52 bg-[rgba(0,0,0,.1)] relative rounded">
            <div className="bg-[green] w-full absolute bottom-0 r-0" style={{ height: `${defense}px` }}></div>
            <div className="w-full absolute bottom-0 flex justify-center">
              <p className="text-white font-bold text-sm my-4 text-center">{defense}</p>
            </div>
          </div>
          <p className="truncate mb-0 mt-2 text-center text-lg">Defence</p>
        </div>
        <div className="w-40">
          <div className="h-52 bg-[rgba(0,0,0,.1)] relative rounded">
            <div className="bg-[green] w-full absolute bottom-0 r-0" style={{ height: `${special_attack}px` }}></div>
            <div className="w-full absolute bottom-0 flex justify-center">
              <p className="text-white font-bold text-sm my-4 text-center">{special_attack}</p>
            </div>
          </div>
          <p className="truncate mb-0 mt-2 text-center text-lg">Special-Attack</p>
        </div>
        <div className="w-40">
          <div className="h-52 bg-[rgba(0,0,0,.1)] relative rounded">
            <div className="bg-[green] w-full absolute bottom-0 r-0" style={{ height: `${special_defense}px` }}></div>
            <div className="w-full absolute bottom-0 flex justify-center">
              <p className="text-white font-bold text-sm my-4 text-center">{special_defense}</p>
            </div>
          </div>
          <p className="truncate mb-0 mt-2 text-center text-lg">Special-Defence</p>
        </div>
        <div className="w-40">
          <div className="h-52 bg-[rgba(0,0,0,.1)] relative rounded">
            <div className="bg-[green] w-full absolute bottom-0 r-0" style={{ height: `${speed}px` }}></div>
            <div className="w-full absolute bottom-0 flex justify-center">
              <p className="text-white font-bold text-sm my-4 text-center">{speed}</p>
            </div>
          </div>
          <p className="truncate mb-0 mt-2 text-center text-lg">Speed</p>
        </div>
      </div>
    </>
  );
};

export default Static;
