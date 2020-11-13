import { useMemo } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './slices/pokemon'

let store

const reducer = {
  pokemon: pokemonReducer
}

function initStore() {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
  })
}

export const initializeStore = () => {
  let _store = store ?? initStore()

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (store) {
    _store = initStore()
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
