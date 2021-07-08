// Lib
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

// Services
import api from '../services/api'

// Helpers
import pokemonTypes from '../utils/pokemon-types'
import { isObjectEmpty } from '../utils/objects'
import { formatRequestPokemon } from '../utils/request'

// Hooks
import useModal from '../hooks/useModal'

// Components
import Header from '../components/Header'
import StatsCards from '../components/StatsCards'

// Images
import madPsyduckImage from '../assets/images/sad-psyduck.png'
import Modal from '../components/Modal'

export default function PokemonPage() {
  const params = useParams()
  const [pokemon, setPokemon] = useState({})
  const [color, setColor] = useState('yellow')
  const [error, setError] = useState(false)
  const [showModal, toggleModal] = useModal()

  const fetchPokemon = async pokemonName => {
    const [apiPokemonData, apiPokemonInfo] = await Promise.all([
      api.get(`pokemon/${pokemonName.toLowerCase()}`),
      api.get(`pokemon-species/${pokemonName.toLowerCase()}`),
    ])

    const { data: pokemonData } = apiPokemonData
    const { data: pokemonInfo } = apiPokemonInfo

    return [pokemonData, pokemonInfo]
  }

  useEffect(() => {
    const handlePageLoad = async () => {
      try {
        const [pokemonData, pokemonInfo] = await fetchPokemon(
          params.pokemonName
        )
        const pokemon = formatRequestPokemon(pokemonData, pokemonInfo)
        setPokemon(pokemon)
      } catch {
        setError(true)
      }
    }

    handlePageLoad()
  }, [params])

  useEffect(() => {
    if (pokemon.type) {
      document.title = `Pokémon | ${pokemon.name.toUpperCase()}`
      setColor(pokemonTypes[pokemon.type])
    }
  }, [pokemon])

  if (error) {
    return (
      <motion.div
        className="p-4 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
      >
        <img src={madPsyduckImage} alt="Mad Psyduck" />
        <h1 className="mb-4 text-3xl tracking-tighter font-bold text-gradient from-yellow-400 to-yellow-500">
          Pokémon not found
        </h1>
        <Link
          to="/"
          className="py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold tracking-tighter rounded shadow-lg"
        >
          Go back
        </Link>
      </motion.div>
    )
  }

  return (
    <div
      className={`bg-gradient-to-b from-${color}-500 to-${color}-600 text-white text-xs overflow-hidden transition`}
    >
      <Modal showModal={showModal} handleRequestClose={toggleModal} />
      <div className="p-4 flex flex-col justify-between min-h-screen max-w-screen-sm md:mx-auto">
        <Header handleOpenModalRequest={toggleModal} />
        {isObjectEmpty(pokemon) ? (
          <div className="flex flex-col justify-center flex-1">
            <h1 className="text-4xl tracking-tighter leading-loose font-bold text-center text-white">
              Loading...
            </h1>
          </div>
        ) : (
          <>
            <div className="flex flex-col">
              <h1 className="text-4xl font-black tracking-tighter leading-normal capitalize text-center">
                {pokemon.name}
              </h1>
              <p className="capitalize tracking-tighter text-lg self-end mr-16">
                {pokemon.type}
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.25, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              className="flex justify-center"
            >
              <motion.img
                layoutId="pokemonImage"
                src={pokemon.image}
                alt={pokemon.name}
                className="w-1/2"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg text-gray-700 my-4 py-4 px-8"
            >
              <h1 className="text-2xl text-center tracking-tighter font-bold mb-2">
                About
              </h1>
              <p className="text-center">{pokemon.description}</p>
            </motion.div>
            <StatsCards stats={pokemon.stats} />
          </>
        )}
      </div>
    </div>
  )
}
