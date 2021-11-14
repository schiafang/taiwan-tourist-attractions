import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
  loadingStatus: false,
}

export const setLoadingStatus = createAction('SET_LOADING_STATUS')

const statusSlice = createSlice({
  name: 'status',
  initialState,
  extraReducers: {
    ['SET_LOADING_STATUS']: (state, action) => {
      return {
        ...state,
        loadingStatus: action.payload,
      }
    },
  },
})

export default statusSlice.reducer
