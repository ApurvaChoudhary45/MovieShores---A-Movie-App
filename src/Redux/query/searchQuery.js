import { createSlice } from '@reduxjs/toolkit'

export const searchQuery = createSlice({
  name: 'search',
  initialState: {
    query: 'avengers'
  },
  reducers: {
    results: (state, action) => {
        state.query = action.payload
      }
  }
})

// Action creators are generated for each case reducer function
export const { results } = searchQuery.actions

export const queryReducer =  searchQuery.reducer