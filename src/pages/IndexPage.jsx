// Lib
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'

// Helpers
import { pokemonList } from '../utils/pokemon'

// Components
import { BsSearch } from 'react-icons/bs'

// Images
import pokemonLogo from '../assets/images/logo.png'

export default function IndexPage() {
  const history = useHistory()
  const [search, setSearch] = useState('')

  /**
   * Redirects the user to a random Pokémon
   */
  const handleFeelingLuckyClick = () => {
    const randomPokemon =
      pokemonList[Math.floor(Math.random() * (pokemonList.length - 1))]
    history.push(`/${randomPokemon}`)
  }

  /**
   * Redirects the user to the Pokémon in the current text input
   *
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = event => {
    event.preventDefault()

    history.push(`/${search}`)
  }

  useEffect(() => {
    document.title = 'Pokémon | PokeAPI'
  }, [])

  return (
    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-gray-700 overflow-hidden">
      <div className="p-4 flex flex-col items-center justify-between min-h-screen max-w-screen-sm md:mx-auto">
        <motion.img
          layoutId="pokemonLogo"
          src={pokemonLogo}
          alt="Pokemon"
          className="w-2/3"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ scale: 0.5, opacity: 0.25, rotate: 90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              src="https://pokeres.bastionbot.org/images/pokemon/25.png"
              className="w-1/2 mb-8"
              alt="Pikachu"
              layoutId="pokemonImage"
            />
          </div>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="bg-white flex w-full rounded overflow-hidden py-2 px-4 shadow-lg mb-4">
              <input
                className="flex-1 outline-none"
                type="text"
                placeholder="Search..."
                value={search}
                autoFocus
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit" className="text-gray-700">
                <BsSearch />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <motion.button
                initial={{ translateY: -50 }}
                animate={{ translateY: 0 }}
                className="bg-white py-2 px-4 rounded shadow-lg text-sm"
                transition={{ default: { duration: 0.25 } }}
                type="button"
                onClick={handleFeelingLuckyClick}
              >
                I'm feeling lucky
              </motion.button>
              <motion.button
                initial={{ translateY: -50 }}
                animate={{ translateY: 0 }}
                transition={{ default: { duration: 0.25 } }}
                className="bg-white py-2 px-4 rounded shadow-lg text-sm"
                type="submit"
              >
                Search
              </motion.button>
            </div>
          </form>
        </motion.div>
        <div>
          <p className="text-center text-black text-sm">
            Made with <span className="text-red-600">♥</span> by{' '}
            <a
              href="https://github.com/Nxrth-x"
              rel="noreferrer"
              className="hover:underline"
              target="_blank"
            >
              Eder Lima
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
