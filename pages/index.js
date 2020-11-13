import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { pokemonActions } from '../src/redux/slices/pokemon'
import MainLayout from '../src/layouts/Main.layout'
import Header from '../src/components/Header/Header.component'
import SearchBar from '../src/components/SearchBar/SearchBar.component'

export default function Home() {
  const dispatch = useDispatch()
  function handleSearchPokemon(name) {
    dispatch(pokemonActions.getByName(name))
  }

  return (
    <MainLayout>
      <Head>
        <title>PokeAPI</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SearchBar onSearchPokemon={handleSearchPokemon} />
    </MainLayout>
  )
}
