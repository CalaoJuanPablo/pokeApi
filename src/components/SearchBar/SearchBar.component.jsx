import { useState } from 'react'
import { SearchBarStyled, SearchTitle, SearchInput } from './SearchBar.styles'

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  function handleSearchSubmit(ev) {
    ev.preventDefault()
    console.log('Search value', searchValue)
  }
  return (
    <SearchBarStyled onSubmit={handleSearchSubmit}>
      <SearchTitle>Search your Pokemon by its name</SearchTitle>
      <SearchInput
        name='search'
        id='search'
        placeholder='e.g. bulbasaur'
        value={searchValue}
        onChange={ev => setSearchValue(ev.target.value)}
      />
    </SearchBarStyled>
  )
}

export default SearchBar
