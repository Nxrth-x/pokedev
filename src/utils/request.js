// ! [INFO] Types specified here don't really represent the full JSON response from the API

/**
 * @typedef PokemonStat
 *
 * @property {{ name: string }} stat
 * @property {string} base_stat
 */

/**
 * @typedef PokemonEntry
 *
 * @property {{ name: string }} language
 * @property {string} flavor_text
 */

/**
 * Formats the pokemon stats to be consumed in the UI
 *
 * @param {PokemonStat[]} pokemonStats
 * @returns
 */
const formatPokemonStats = pokemonStats =>
  pokemonStats
    .map(pokemonStat => ({
      [pokemonStat.stat.name]: pokemonStat.base_stat,
    }))
    .reduce((current, next) => ({ ...current, ...next }), {})

/**
 * Gets the 'about' section of a given pokemon
 *
 * @param {PokemonEntry[]} pokemonEntries
 * @returns First pokemon entry in english
 */
const getPokemontAbout = pokemonEntries =>
  pokemonEntries
    .filter(entry => entry.language.name === 'en')[0]
    .flavor_text.replace(/(\n|\f)/g, ' ')

export const formatRequestPokemon = (pokemonData, pokemonInfo) => {
  const pokemon = {
    name: pokemonData.name,
    description: getPokemontAbout(pokemonInfo.flavor_text_entries),
    baseExperience: pokemonData.base_experience,
    image: `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`,
    type: pokemonData.types[0].type.name,
    stats: formatPokemonStats(pokemonData.stats),
  }

  return pokemon
}
