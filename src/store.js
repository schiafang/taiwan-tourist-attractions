import { configureStore } from '@reduxjs/toolkit'
import tourismReducer from './slices/tourism'

const reducer = {
  tourism: tourismReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store
