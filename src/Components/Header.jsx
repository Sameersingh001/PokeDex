import React from 'react'
import { TbPokeball } from "react-icons/tb";



const Header = () => {
  return (
    <div className='w-full h-20 bg-gray-600 flex items-center justify-center'>
          <h1 className='font-bold text-4xl text-red-300 border-b-4 '> PokeDex </h1>
          <TbPokeball className='text-5xl font-bold ml-2 text-red-300' />
    </div>
  )
}

export default Header