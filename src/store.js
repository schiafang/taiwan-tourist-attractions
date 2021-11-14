import { configureStore } from '@reduxjs/toolkit'
import tourismReducer from './slices/tourism'
import statusReducer from './slices/status'

const reducer = {
  tourism: tourismReducer,
  status: statusReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store
