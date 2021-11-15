import * as S from '../styles/pages/detail'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import * as actions from '../slices/tourism'
import { setLoadingStatus } from '../slices/status'
import fetch from '../utilities/fetch'
import CoverSlider from '../components/CoverSlider'
import SectionHeader from '../components/SectionHeader'
import Breadcrumb from '../components/Breadcrumb'
import IconScene from '../assets/nearby-scene.svg'
import IconFood from '../assets/nearby-food.svg'
import IconEvent from '../assets/nearby-event.svg'
import CardVertical from '../components/CardVertical'
import CardsGrid from '../components/CardsGrid'
import { switchTypeToLabel, formatDateIncludeTime } from '../utilities/helpers'

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY

const typeDataInfo = {
  Activity: [
    {
      label: '活動時間',
      param: ['StartTime', 'EndTime'],
    },
    {
      label: '聯絡電話',
      param: 'Phone',
    },
    {
      label: '主辦單位',
      param: 'Organizer',
    },
    {
      label: '活動地點',
      param: 'Address',
    },
    {
      label: '備註',
      param: 'Remarks',
    },
  ],
  ScenicSpot: [
    {
      label: '開放時間',
      param: 'OpenTime',
    },
    {
      label: '服務電話',
      param: 'Phone',
    },
    {
      label: '景點地址',
      param: 'Address',
    },
    {
      label: '官方網站',
      param: 'WebsiteUrl',
    },
    {
      label: '票價資訊',
      param: 'TicketInfo',
    },
    {
      label: '注意事項',
      param: 'Remarks',
    },
  ],
  Restaurant: [
    {
      label: '營業時間',
      param: 'OpenTime',
    },
    {
      label: '聯絡電話',
      param: 'Phone',
    },
    {
      label: '餐廳地址',
      param: 'Address',
    },
    {
      label: '官方網站',
      param: 'WebsiteUrl',
    },
  ],
}

const typeTitle = {
  Activity: '活動',
  ScenicSpot: '景點',
  Restaurant: '餐廳',
}

const Detail = () => {
  let { id, type } = useParams()
  const dispatch = useDispatch()

  const selector = useSelector((state) => state.tourism)

  const [data, setData] = useState(null)

  const fetchData = async () => {
    dispatch(setLoadingStatus(true))
    const result = await fetch.getSpecifiedData(type, id)
    setData(result.data[0])
    dispatch(setLoadingStatus(false))
  }

  const finData = () => {
    if (selector[type].length === 0) {
      fetchData()
      return
    }
    let data = selector[type].find((i) => i.ID === id)
    data ? setData(data) : fetchData()
  }

  const fetchRecommendData = async () => {
    dispatch(setLoadingStatus(true))

    let result
    if (type === 'ScenicSpot') {
      result = await fetch.getAllScenicSpots({ params: { $top: 10 } })
      dispatch(actions.setScenicSpots(result.data))
    }
    if (type === 'Activity') {
      result = await fetch.getAllActivities({ params: { $top: 10 } })
      dispatch(actions.setActivities(result.data))
    }
    if (type === 'Restaurant') {
      result = await fetch.getAllRestaurants({ params: { $top: 10 } })
      dispatch(actions.setRestaurant(result.data))
    }

    dispatch(setLoadingStatus(false))
  }

  useEffect(() => {
    finData()
    if (selector[type].length === 0) {
      fetchRecommendData()
    }
  }, [id, selector])

  return (
    data && (
      <S.DetailContainer>
        <Breadcrumb
          breadcrumbPath={[
            { label: switchTypeToLabel(type), path: `/explore/${type}` },
            { label: data.Name, path: null },
          ]}
        />

        <CoverSlider
          images={Object.keys(data.Picture).length > 0 ? [data.Picture] : null}
        />

        <section>
          <h1 className='section-title'></h1>
          <div className='tags'>
            {Array.from({ length: 6 }, (v, i) => {
              const param = `Class${i + 1}`
              return data[param] && <span key={i}>{`#${data[param]}`}</span>
            })}
          </div>
          <S.SubTitle>{typeTitle[type]}介紹：</S.SubTitle>
          <S.Description>{data.Description}</S.Description>
        </section>

        <S.InfoSection>
          <S.InfoBox>
            {typeDataInfo[type].map(({ label, param }, index) => {
              const isDateRangeField =
                Array.isArray(param) && data[param[0]] && data[param[1]]

              if (isDateRangeField) {
                return (
                  <li key={index}>
                    <span>{label}：</span>
                    <span>
                      {formatDateIncludeTime(data[param[0]])} -{' '}
                      {formatDateIncludeTime(data[param[1]])}
                    </span>
                  </li>
                )
              } else
                return data[param] ? (
                  <li key={index}>
                    <span>{label}：</span>
                    {param.includes('Url') ? (
                      <a href={data[param]} target='_blank'>
                        {data[param]}
                      </a>
                    ) : (
                      <span>{data[param]}</span>
                    )}
                  </li>
                ) : null
            })}
          </S.InfoBox>
          <S.InfoMap
            src={`https://www.google.com/maps/embed/v1/place?key=${googleKey}&q=${data.Position.PositionLat},${data.Position.PositionLon}`}
            height='185'
          />
          <S.InfoNearby>
            <S.SubTitle>周邊介紹：</S.SubTitle>
            <div>
              <Link
                to={`/nearby/ScenicSpot?lat=${data.Position.PositionLat}&lon=${data.Position.PositionLon}`}
              >
                <img src={IconScene} />
                附近景點
              </Link>
              <Link
                to={`/nearby/Activity?lat=${data.Position.PositionLat}&lon=${data.Position.PositionLon}`}
              >
                <img src={IconEvent} />
                附近活動
              </Link>
              <Link
                to={`/nearby/Restaurant?lat=${data.Position.PositionLat}&lon=${data.Position.PositionLon}`}
              >
                <img src={IconFood} />
                附近美食
              </Link>
            </div>
          </S.InfoNearby>
        </S.InfoSection>

        <section>
          <SectionHeader
            title={`還有這些不能錯過的${typeTitle[type]}`}
            linktitle={`更多${data.City ? data.City : ''}${typeTitle[type]}`}
            to='/'
          />
        </section>

        <CardsGrid>
          {selector[type].length > 0 &&
            Array.from({ length: 4 }, (v, i) => {
              const event = selector[type][i]

              const { ID, Name, Position } = event
              return (
                <CardVertical
                  key={ID}
                  ID={ID}
                  type={type}
                  title={Name}
                  position={Position}
                  image={event.Picture.PictureUrl1}
                />
              )
            })}
        </CardsGrid>
      </S.DetailContainer>
    )
  )
}

export default Detail
