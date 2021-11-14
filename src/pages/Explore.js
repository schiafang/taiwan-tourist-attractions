import * as S from '../styles/pages/explore'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import images from '../assets/category-bg'
import Breadcrumb from '../components/Breadcrumb'
import SearchBar from '../components/SearchBar'
import { switchTypeToLabel } from '../utilities/helpers'

const CategoryCard = ({ type, src, text }) => {
  return (
    <Link to={`/explore/${type}/${text}`}>
      <S.CategoryCard>
        <img src={src} />
        <span>{text}</span>
      </S.CategoryCard>
    </Link>
  )
}

function Explore() {
  const { categories, search } = useSelector((state) => state.tourism)
  let { type } = useParams()

  return (
    <>
      <Breadcrumb
        breadcrumbPath={[
          { label: switchTypeToLabel(type), path: `/explore/${type}` },
        ]}
      />
      <SearchBar />
      <S.Title>
        <h2>熱門主題</h2>
      </S.Title>
      <S.CategoryWrapper>
        {categories &&
          categories[type].map((item, index) => {
            const countBackgroundImage = images[type]?.length || 0
            const selectIndex = index % countBackgroundImage || 0

            return (
              <CategoryCard
                type={type}
                key={index}
                text={item}
                src={images[type][selectIndex]}
              />
            )
          })}
      </S.CategoryWrapper>
    </>
  )
}

export default Explore
