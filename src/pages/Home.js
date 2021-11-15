import * as S from '../styles/pages/home'
import * as actions from '../slices/tourism'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

import Banner from '../components/Banner'
import CoverSlider from '../components/CoverSlider'
import CardHorizontal from '../components/CardHorizontal'
import CardVertical from '../components/CardVertical'
import SectionHeader from '../components/SectionHeader'
import CardsGrid from '../components/CardsGrid'

import homeppageCover01 from '../assets/ScenicSpotPicture01.png'
import homeppageCover02 from '../assets/ScenicSpotPicture02.png'

const homePageSlider = [
  {
    PictureUrl: homeppageCover01,
    PictureDescription: '新北市 | 不厭亭',
  },
  {
    PictureUrl: homeppageCover02,
    PictureDescription: '',
  },
]

function Home() {
  const { Activity, Restaurant, ScenicSpot } = useSelector(
    (state) => state.tourism
  )

  return (
    <div>
      <Banner />
      <CoverSlider images={homePageSlider} showText={true} />
      <S.DisplaySection>
        <SectionHeader
          title='近期活動'
          linktitle='查看更多活動'
          to='/explore/Activity'
        />

        <div className='card-list-wrapper'>
          {Activity.length > 0 &&
            Array.from({ length: 4 }, (v, i) => {
              const event = Activity[i]
              const { ID, Name, StartTime, EndTime, Position } = event

              return (
                <Link key={ID} to={`/detail/Activity/${ID}`}>
                  <CardHorizontal
                    title={Name}
                    startTime={StartTime}
                    endTime={EndTime}
                    position={Position}
                  />
                </Link>
              )
            })}
        </div>
      </S.DisplaySection>

      <S.DisplaySection>
        <SectionHeader
          title='熱門打卡景點'
          linktitle='查看更多景點'
          to='/explore/ScenicSpot'
        />
        <CardsGrid>
          {ScenicSpot.length > 0 &&
            Array.from({ length: 4 }, (v, i) => {
              const event = ScenicSpot[i]
              const { ID, Name, Position } = event
              return (
                <CardVertical
                  key={ID}
                  ID={ID}
                  type='ScenicSpot'
                  title={Name}
                  position={Position}
                  image={event.Picture.PictureUrl1}
                />
              )
            })}
        </CardsGrid>
      </S.DisplaySection>

      <S.DisplaySection>
        <SectionHeader
          title='一再回訪美食'
          linktitle='查看更多美食'
          to='/explore/Restaurant'
        />
        <CardsGrid>
          {Restaurant.length > 0 &&
            Array.from({ length: 4 }, (v, i) => {
              const event = Restaurant[i]
              const { ID, Name, Position } = event
              return (
                <CardVertical
                  key={ID}
                  ID={ID}
                  type='Restaurant'
                  title={Name}
                  position={Position}
                  image={event.Picture.PictureUrl1}
                />
              )
            })}
        </CardsGrid>
      </S.DisplaySection>
    </div>
  )
}

export default connect(null, actions)(Home)
