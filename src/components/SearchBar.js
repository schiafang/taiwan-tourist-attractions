import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import * as S from '../styles/components/search-bar'
import fetch from '../utilities/fetch'
import * as actions from '../slices/tourism'
import { setLoadingStatus } from '../slices/status'
import cityList from '../utilities/city'
import searchIcon from '../assets/search.svg'

const SearchBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { type } = useParams()

  const [search, setSearch] = useState({
    type,
    keyword: '',
    city: null,
  })

  const handleSearchSubmit = async (conditions) => {
    dispatch(setLoadingStatus(true))
    let result

    if (!conditions.city) {
      result = await fetch.getFilterData({
        type,
        params: {
          $top: 30,
          $filter: `contains(Name, '${conditions.keyword}')`,
        },
      })
    } else {
      result = await fetch.getCityFilterData({
        type,
        city: conditions.city,
        params: {
          $filter: `contains(Name, '${conditions.keyword}')`,
        },
      })
    }

    dispatch(
      actions.setFilteredData({
        type,
        data: result.data,
      })
    )
    dispatch(setLoadingStatus(false))
    navigate(`/search/${type}`)
  }

  return (
    <S.SearchBarWrapper>
      <select
        defaultValue={null}
        onChange={(e) => {
          return setSearch((pre) => ({
            ...pre,
            city: e.target.value,
          }))
        }}
      >
        <option value={null}>縣市</option>
        {Object.keys(cityList).map((key, index) => {
          return (
            <option key={index} value={key}>
              {cityList[key]}
            </option>
          )
        })}
      </select>
      <div className='keyword-input'>
        <input
          value={search.keyword}
          placeholder='你想去哪裡？請輸入關鍵字'
          onChange={(e) =>
            setSearch((pre) => ({
              ...pre,
              keyword: e.target.value,
            }))
          }
        />
        {search.keyword.length > 0 && (
          <button
            onClick={(e) => {
              setSearch((pre) => ({
                ...pre,
                keyword: '',
              }))
              handleSearchSubmit({ ...search, keyword: '' })
            }}
          >
            Clear
          </button>
        )}
      </div>

      <button onClick={() => handleSearchSubmit(search)}>
        <img src={searchIcon} />
        搜尋
      </button>
    </S.SearchBarWrapper>
  )
}

export default SearchBar
