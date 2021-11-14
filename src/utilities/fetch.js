import { city } from './city'
import axios from 'axios'
import jsSHA from 'jssha'

const corsAnywhere = 'https://cors.bridged.cc/'

function getAuthorizationHeader() {
  const AppID = process.env.REACT_APP_URL_TDX_ID
  const AppKey = process.env.REACT_APP_URL_TDX_KEY
  const GMTString = new Date().toGMTString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')

  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)

  const HMAC = ShaObj.getHMAC('B64')

  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`

  return { Authorization: Authorization, 'X-Date': GMTString }
}

export const tourismApiInstance = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism',
  headers: getAuthorizationHeader(),
})

export default fetch = {
  getAllScenicSpots: (props) => tourismApiInstance.get('/scenicspot', props),
  getAllActivities: (props) => tourismApiInstance.get(`/activity`, props),
  getAllRestaurants: (props) => tourismApiInstance.get(`/restaurant`, props),

  getSpecifiedData: (type, ID) =>
    tourismApiInstance.get(type, {
      params: { $filter: `contains(ID, '${ID}')` },
    }),

  getFilterData: ({ type, params }) =>
    tourismApiInstance.get(`/${type}`, { params }),
  getCityFilterData: ({ type, params, city }) =>
    tourismApiInstance.get(`/${type}/${city}`, { params }),
}

export const getCityName = (lat, lon) => {
  // return axios.get(
  //   `${corsAnywhere}https://api.nlsc.gov.tw/other/TownVillagePointQuery/${lon}/${lat}`
  // )
}
