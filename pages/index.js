import Head from 'next/head'
import MainLayout from '../src/layouts/Main.layout'
import Header from '../src/components/Header/Header.component'
import SearchBar from '../src/components/SearchBar/SearchBar.component'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>PokeAPI</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SearchBar />
    </MainLayout>
  )
}
