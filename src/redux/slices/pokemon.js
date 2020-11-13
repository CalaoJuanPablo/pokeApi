import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: {},
  names: [],
  favorites: [],
  isLoading: false,
  error: ''
}

const getPokemonByName = createAsyncThunk(
  'pokemon/getByName',
  async (name, { rejectWithValue }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (response.status === 404) {
      throw new Error('Pokemon not found')
    }

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const data = await response.json()

    return data
  }
)

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemonByName.pending]: state => {
      state.isLoading = true
      state.error = ''
    },
    [getPokemonByName.fulfilled]: (state, { payload }) => {
      const byName = {
        [payload.name]: payload
      }
      state.entities = {
        ...state.entities,
        ...byName
      }
      state.names = [...state.names, payload.name]
      state.isLoading = false
      state.error = ''
    },
    [getPokemonByName.rejected]: (state, { error }) => {
      state.isLoading = false
      state.error = error.message
    }
  }
})

export default pokemonSlice.reducer

export const pokemonActions = {
  getByName: getPokemonByName
}
