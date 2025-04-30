import { configureStore } from '@reduxjs/toolkit'
import { queryReducer } from './query/searchQuery'
import { heartReducer } from './favorite/favorite'
import { watchReducer } from './Watch/watch'

export const store =  configureStore({
  reducer: {
    search: queryReducer,
    fav: heartReducer,
    watched: watchReducer
  }
})