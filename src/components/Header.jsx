import React from 'react'
import { motion } from 'framer-motion'
import { Link, useHistory } from 'react-router-dom'

import { HiOutlineChevronLeft } from 'react-icons/hi'

import pokemonLogoImage from '../assets/images/logo.png'
import pokeballImage from '../assets/images/pokeball.png'

export default function Header({ handleOpenModalRequest }) {
  const history = useHistory()

  return (
    <header className="flex items-center justify-between">
      <HiOutlineChevronLeft
        className="w-8 h-8 text-white cursor-pointer"
        onClick={history.goBack}
      />
      <Link to="/">
        <motion.img
          layoutId="pokemonLogo"
          src={pokemonLogoImage}
          alt="PokeAPI"
          className="w-32 cursor-pointer"
        />
      </Link>
      <img
        src={pokeballImage}
        alt="Pokeball"
        className="w-6 h-6 cursor-pointer"
        onClick={handleOpenModalRequest}
      />
    </header>
  )
}
