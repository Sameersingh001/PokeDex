import React, { useState } from 'react';
import { GiPokecog } from "react-icons/gi";

const Search = ({ searchData, onSearch }) => {
  const [pokeSearch, setPokeSearch] = useState("");

  const handleSearch = () => {
    const name = pokeSearch.trim().toLowerCase();

    if (!name) {
      onSearch([]); // send empty if input is cleared
      return;
    }

    const nameMatch = searchData.filter((poke) =>
      poke.name.toLowerCase().includes(name)
    );
    onSearch(nameMatch); // pass search result to parent
  };

  return (
    <div className='flex items-center justify-center flex-row h-16 mt-3'>
      <input 
        value={pokeSearch}
        onChange={(e) => setPokeSearch(e.target.value)}
        type="search" 
        className='ml-10 w-[500px] h-14 border-2 border-gray-400 text-center text-xl font-bold text-gray-500 font-serif rounded-l-2xl' 
        placeholder='Search Pokemon Name ...............'  
      />
      <button 
        onClick={handleSearch} 
        className='mr-10 flex items-center justify-center bg-blue-500 h-14 w-22 border-none rounded-r-2xl cursor-pointer'>
        <GiPokecog className='text-4xl font-bold text-white' />
      </button>
    </div>
  );
};

export default Search;
