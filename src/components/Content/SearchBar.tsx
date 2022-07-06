import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PokemonDetail } from "../../interface";

const SearchBar: React.FC = () => {
  const [pokedex, setPokedex] = useState<PokemonDetail[]>([]);
  const [filteredData, setFilteredData] = useState<PokemonDetail[]>([]);
  const [searchBox, setSearchBox] = useState(false);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000").then((res) => {
      setPokedex(res.data.results);
    });
  }, []);

  console.log(pokedex);
  const handleFilter = (event: any) => {
    const search = event.target.value;
    const newFilter = pokedex.filter((value) => {
      return value.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (search === "") setFilteredData([]);
    else setFilteredData(newFilter);
  };

  return (
    <>
      <div className="flex flex-col justify-start p-4 mx-[30px] bg-white max-w-[1144px] rounded-xl relative ">
        <h4 className=" text-xl mb-4">Name of pokemon</h4>
        <input
          className="relative rounded p-3 border-2 border-black"
          type="text"
          placeholder="Ex.Pikachu"
          onFocus={() => setSearchBox(true)}
          onChange={handleFilter}
        ></input>
        {filteredData.length !== 0 && (
          <div
            className={
              searchBox
                ? "w-52 h-36 bg-white shadow-lg overflow-hidden overflow-y-scroll absolute right-4 top-[120px] rounded-lg px-2 text-left"
                : "hidden"
            }
            onBlur={() => setSearchBox(false)}
          >
            {filteredData.map((value: any, index) => {
              const id = pokedex.indexOf(value);
              return (
                <Link to={`/pokemon/${id + 1}`} key={index}>
                  <p className="hover:bg-gray-200">{value.name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
