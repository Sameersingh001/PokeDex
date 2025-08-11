import React, { useState } from 'react';
import Search from './Search';

const AllPoke = ({ PokeData }) => {
  const [searchResults, setSearchResults] = useState([]);

  const displayData = searchResults.length > 0 ? searchResults : PokeData;

  return (
    <>
  <Search searchData={PokeData} onSearch={setSearchResults} />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 w-full">
  {displayData.map((data) => {
    const id = data.url.split("/")[6]
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
      <div
        key={id}
        className="bg-gradient-to-br from-teal-100 to-blue-200 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 w-full h-auto flex flex-col items-center justify-center p-4"
      >
        <img
          src={img}
          alt={data.name}
          className="w-[150px] h-[150px] object-contain mb-4"
        />
        <p className="capitalize text-gray-800 font-extrabold text-xl tracking-wide">
          {data.name}
        </p>
      </div>
    );
  })}
</div>

    </>
  );
};

export default AllPoke;
