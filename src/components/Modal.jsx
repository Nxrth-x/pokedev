// Lib
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useHistory } from 'react-router-dom'

// Helpers
import { pokemonList } from '../utils/pokemon'

// Components
import { BsSearch } from 'react-icons/bs'

export default function Modal({ showModal, handleRequestClose }) {
  const history = useHistory()
  const [search, setSearch] = useState('')

  /**
   * Redirects the user to a specified path
   *
   * @param {string} path Path to redirect the user to
   */
  const handleRedirect = path => {
    handleRequestClose()
    history.push(path)
  }

  /**
   * Redirects the user to the searched pokemon url
   *
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = event => {
    event.preventDefault()

    handleRedirect(`/${search}`)
  }

  /**
   * Redirects the user to a random Pokémon
   */
  const handleFeelingLuckyClick = () => {
    const randomPokemon =
      pokemonList[Math.floor(Math.random() * (pokemonList.length - 1))]
    handleRedirect(`/${randomPokemon}`)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="w-full h-screen absolute top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center text-gray-700 text-base z-10 overflow-hidden"
          onClick={handleRequestClose}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="p-8  rounded-lg bg-gray-200 w-3/4 max-w-md"
            onClick={e => e.stopPropagation()}
          >
            <h1 className="text-4xl font-bold tracking-tighter mb-8 text-center">
              Search
            </h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="py-2 px-4 mb-4 flex bg-white rounded items-center shadow-lg">
                <input
                  type="text"
                  placeholder="Search"
                  autoFocus
                  className="flex-1 outline-none"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <button type="submit">
                  <BsSearch className="w-4 h-4" />
                </button>
              </div>
              <button
                className="py-2 px-4 bg-white rounded shadow-lg transition hover:bg-gray-100"
                type="button"
                onClick={handleFeelingLuckyClick}
              >
                I'm feeling lucky
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
