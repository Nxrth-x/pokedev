import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import IndexPage from '../pages/IndexPage'
import PokemonPage from '../pages/PokemonPage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AnimateSharedLayout>
          <Route exact path="/" component={IndexPage} />
          <Route path="/:pokemonName" component={PokemonPage} />
        </AnimateSharedLayout>
      </Switch>
    </BrowserRouter>
  )
}
