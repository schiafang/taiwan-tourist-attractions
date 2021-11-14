import * as S from '../styles/pages/search'
import { useSelector } from 'react-redux'

import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import CardsGrid from '../components/CardsGrid'
import CardVertical from '../components/CardVertical'
import NoDataFound from '../components/NoDataFound'
import { switchTypeToLabel } from '../utilities/helpers'

const Search = () => {
  const { type, data } = useSelector((state) => state.tourism.search)
  const isLoading = useSelector((state) => state.status.loadingStatus)

  return (
    <S.SearchPageWrapper>
      <Breadcrumb
        breadcrumbPath={[
          { label: switchTypeToLabel(type), path: `/explore/${type}` },
        ]}
      />
      <SearchBar />
      <S.Title>
        <h2>搜尋結果</h2>
        <span>
          共有<span className='color'>{data.length}</span>幾筆
        </span>
      </S.Title>

      <S.ResultArea>
        {!data.length > 0 && !isLoading ? (
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

export default Search
