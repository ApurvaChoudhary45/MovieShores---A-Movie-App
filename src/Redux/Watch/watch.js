import { createSlice } from '@reduxjs/toolkit'

export const watch = createSlice({
  name: 'watched',
  initialState: {
    watched: []
  },
  reducers: {
    
    watchIcon: (state, action) => {
      const id= action.payload
      if(state.watched.includes(id)){
        state.watched = state.watched.filter(i=> i !== id)
      }else{
        state.watched.push(id)
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {watchIcon } = watch.actions

export const watchReducer =  watch.reducer