import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../styles/components/banner'
import iconLocation from '../assets/location.svg'
import searchIcon from '../assets/search.svg'
import fetch from '../utilities/fetch'
import * as actions from '../slices/tourism'
import { setLoadingStatus } from '../slices/status'

const Banner = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [search, setSearch] = useState({ type: 'ScenicSpot', keyword: '' })

  const handleSearchSubmit = async (e) => {
    dispatch(setLoadingStatus(true))

    const result = await fetch.getFilterData({
      type: search.type,
      params: {
        $filter: `contains(Name, '${search.keyword}')`,
      },
    })

    dispatch(
      actions.setFilteredData({
        type: search.type,
        data: result.data,
      })
    )
    dispatch(setLoadingStatus(false))
    navigate(`/search/${search.type}`)
  }

  return (
    <S.BannerWrapper>
      <section>
        <S.Title>
          <p>
            探索<span className='title-spot'>台灣之美</span>
          </p>
          <p>讓我們更親近這片土地</p>
        </S.Title>
        <S.SubTitle>
          <img src={iconLocation} />
          <span>台灣旅遊景點導覽</span>
          <span>Taiwan Travel Guide</span>
        </S.SubTitle>
      </section>
      <section>
        <S.FilterContanier>
          <select
            defaultValue='ScenicSpot'
            onChange={(e) =>
              setSearch((pre) => ({
                ...pre,
                type: e.target.value,
              }))
            }
          >
            <option value='ScenicSpot'>探索景點</option>
            <option value='Activity'>節慶活動</option>
            <option value='Restaurant'>品嚐美食</option>
          </select>
          <input
            value={search.keyword}
            placeholder='你想去哪裡？請輸入關鍵字'
            onKeyDown={(e) => e.keyCode === 13 && handleSearchSubmit()}
            onChange={(e) =>
              setSearch((pre) => ({
                ...pre,
                keyword: e.target.value,
              }))
            }
          />
          <button onClick={handleSearchSubmit}>
            <img src={searchIcon} />
            搜尋
          </button>
        </S.FilterContanier>
      </section>
    </S.BannerWrapper>
  )
}

export default connect(null, actions)(Banner)
