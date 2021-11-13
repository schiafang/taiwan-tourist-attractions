import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
  Activity: [],
  Restaurant: [],
  ScenicSpot: [],
}

export const createInitialData = createAction('CREATE_INITIAL_DATA')

export const getActivities = createAction('GET_ACTIVITIES')

export const getRestaurant = createAction('GET_RESTAURANTS')

export const getScenicSpots = createAction('GET_SCENIC_SPOTS')

const tourismSlice = createSlice({
  name: 'tourism',
  initialState,
  extraReducers: {
    ['CREATE_INITIAL_DATA']: (state, action) => {
      return action.payload
    },
    ['GET_ACTIVITIES']: (state, action) => {
      return { ...state, Activity: action.payload }
    },
    ['GET_RESTAURANTS']: (state, action) => {
      return { ...state, Restaurant: action.payload }
    },
    ['GET_SCENIC_SPOTS']: (state, action) => {
      return { ...state, ScenicSpot: action.payload }
    },
  },
})

export default tourismSlice.reducer
