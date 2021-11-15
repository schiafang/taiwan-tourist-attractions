import * as S from '../styles/pages/search'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import * as actions from '../slices/tourism'
import { setLoadingStatus } from '../slices/status'
import Breadcrumb from '../components/Breadcrumb'
import CardsGrid from '../components/CardsGrid'
import CardVertical from '../components/CardVertical'
import NoDataFound from '../components/NoDataFound'
import { switchTypeToLabel } from '../utilities/helpers'

const CategorySearch = () => {
  const dispatch = useDispatch()
  const { category, type } = useParams()
  const { data } = useSelector((state) => state.tourism.search)

  const fetchData = async () => {
    dispatch(setLoadingStatus(true))

    let result = await fetch.getFilterData({
      type,
      params: {
        $top: 60,
        $filter:
          type === 'Restaurant'
            ? `contains(Class, '${category}')`
            : `contains(Class1, '${category}')`,
      },
    })

    dispatch(
      actions.setFilteredData({
        type,
        data: result.data,
      })
    )

    dispatch(setLoadingStatus(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <S.SearchPageWrapper>
      <Breadcrumb
        breadcrumbPath={[
          { label: switchTypeToLabel(type), path: `/explore/${type}` },
        ]}
      />

      <S.Title>
        <h2>{category}</h2>
      </S.Title>

      <S.ResultArea>
        {!data || data.length === 0 ? (
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

export default CategorySearch
