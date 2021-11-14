import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
  Activity: [],
  Restaurant: [],
  ScenicSpot: [],
  search: {
    type: '',
    city: '',
    data: [],
  },
  categories: {
    Activity: [],
    Restaurant: [],
    ScenicSpot: [],
  },
}

export const createInitialData = createAction('CREATE_INITIAL_DATA')

export const setActivities = createAction('SET_ACTIVITIES')

export const setRestaurant = createAction('SET_RESTAURANTS')

export const setScenicSpots = createAction('SET_SCENIC_SPOTS')

export const setFilteredData = createAction('SET_FILTERED_DATA')

const tourismSlice = createSlice({
  name: 'tourism',
  initialState,
  extraReducers: {
    ['CREATE_INITIAL_DATA']: (state, action) => {
      let currentCategories = JSON.parse(JSON.stringify(state.categories))
      const concatCategories = (type, filed) => {
        let currentValue = currentCategories[type]
        let newValue = action.payload[type].map((i) =>
          i[filed] ? i[filed] : null
        )
        let concat = [...currentValue, ...newValue].filter(
          (item, index, arr) => item && arr.indexOf(item) === index
        )
        return concat
      }

      return {
        ...state,
        ...action.payload,
        categories: {
          Activity: concatCategories('Activity', 'Class1'),
          Restaurant: concatCategories('Restaurant', 'Class'),
          ScenicSpot: concatCategories('ScenicSpot', 'Class1'),
        },
      }
    },
    ['SET_ACTIVITIES']: (state, action) => {
      return { ...state, Activity: action.payload }
    },
    ['SET_RESTAURANTS']: (state, action) => {
      return { ...state, Restaurant: action.payload }
    },
    ['SET_SCENIC_SPOTS']: (state, action) => {
      return { ...state, ScenicSpot: action.payload }
    },
    ['SET_FILTERED_DATA']: (state, action) => {
      return { ...state, search: action.payload }
    },
    ['SET_CATEGORIES_DATA']: (state, action) => {
      return { ...state, search: action.payload }
    },
  },
})

export default tourismSlice.reducer
