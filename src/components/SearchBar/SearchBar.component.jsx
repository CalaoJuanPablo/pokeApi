import { useState } from 'react'
import { SearchBarStyled, SearchTitle, SearchInput } from './SearchBar.styles'

function SearchBar({ onSearchPokemon }) {
  const [searchName, setSearchName] = useState('')

  function handleSearchSubmit(ev) {
    ev.preventDefault()
    onSearchPokemon(searchName)
  }
  return (
    <SearchBarStyled onSubmit={handleSearchSubmit}>
      <SearchTitle>Search your Pokemon by its name</SearchTitle>
      <SearchInput
        name='search'
        id='search'
        placeholder='e.g. bulbasaur'
        value={searchName}
        onChange={ev => setSearchName(ev.target.value)}
      />
    </SearchBarStyled>
  )
}

export default SearchBar
