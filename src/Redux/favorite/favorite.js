import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'fav',
  initialState: {
    favs : []
  },
  reducers: {
    favIcon: (state, action) => {
        const id = action.payload
        if(state.favs.includes(id)){
            state.favs = state.favs.filter(i=> i !== id)

        }
        else{
            state.favs.push(id)
        }
      }
  }
})

// Action creators are generated for each case reducer function
export const { favIcon } = counterSlice.actions

export const heartReducer =  counterSlice.reducer