import * as S from '../styles/pages/search'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import * as actions from '../slices/tourism'
import { setLoadingStatus } from '../slices/status'
import fetch from '../utilities/fetch'
import Breadcrumb from '../components/Breadcrumb'
import CardsGrid from '../components/CardsGrid'
import CardVertical from '../components/CardVertical'
import NoDataFound from '../components/NoDataFound'
import { switchTypeToLabel } from '../utilities/helpers'

const typeTitle = {
  Activity: '活動',
  ScenicSpot: '景點',
  Restaurant: '餐廳',
}

const Nearby = () => {
  const { type } = useParams()
  const location = useLocation()
  const dispatch = useDispatch()

  const data = useSelector((state) => state.tourism.search)

  const fetchNearbyData = async () => {
    dispatch(setLoadingStatus(true))

    const position = queryString.parse(location.search)
    let result = await fetch.getFilterData({
      type,
      params: {
        $top: 30,
        $spatialFilter: `nearby(${position.lat}, ${position.lon},5000)`,
      },
    })

    dispatch(actions.setFilteredData(result.data))
    dispatch(setLoadingStatus(false))
  }

  useEffect(() => {
    fetchNearbyData()
  }, [])

  return (
    <S.SearchPageWrapper>
      <Breadcrumb
        breadcrumbPath={[
          { label: switchTypeToLabel(type), path: `/explore/${type}` },
        ]}
      />

      <S.Title>
        <h2>附近{typeTitle[type]}</h2>
      </S.Title>

      <S.ResultArea>
        {!data.length > 0 ? (
          <NoDataFound />
        ) : (
          <CardsGrid slider={false}>
            {data.map((event) => {
              const { ID, Name, Position, City } = event
              return (
                <CardVertical
                  key={ID}
                  ID={ID}
                  type={type}
                  title={Name}
                  position={Position}
                  city={City}
                  image={event.Picture.PictureUrl1}
                />
              )
            })}
          </CardsGrid>
        )}
      </S.ResultArea>
    </S.SearchPageWrapper>
  )
}

export default Nearby
