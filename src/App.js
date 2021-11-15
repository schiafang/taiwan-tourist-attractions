import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'

import * as S from './styles/app'
import * as actions from './slices/tourism'
import { setLoadingStatus } from './slices/status'

import Header from './components/Header'
import Footer from './components/Footer'
import Spinner from './components/Spinner'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Explore from './pages/Explore'
import Search from './pages/Search'
import Nearby from './pages/Nearby'
import CategorySearch from './pages/CategorySearch'
import fetch from './utilities/fetch'

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.status.loadingStatus)

  const getInitialData = async () => {
    dispatch(setLoadingStatus(true))
    const scenicSpots = await fetch.getAllScenicSpots({
      params: { $top: 60 },
    })
    const restaurants = await fetch.getAllRestaurants({
      params: { $top: 60 },
    })
    const activities = await fetch.getAllActivities({ params: { $top: 60 } })

    dispatch(
      actions.createInitialData({
        Activity: activities.data,
        Restaurant: restaurants.data,
        ScenicSpot: scenicSpots.data,
      })
    )
    dispatch(setLoadingStatus(false))
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <HashRouter>
      <S.AppWrapper>
        <Spinner loading={isLoading} />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/:type' element={<Search />} />
            <Route
              path='/explore/:type/:category'
              element={<CategorySearch />}
            />
            <Route path='/explore/:type' element={<Explore />} />
            <Route path='/detail/:type/:id' element={<Detail />} />
            <Route path='/nearby/:type' element={<Nearby />} />
          </Routes>
        </main>
        <Footer />
      </S.AppWrapper>
    </HashRouter>
  )
}

export default connect(null, actions)(App)
