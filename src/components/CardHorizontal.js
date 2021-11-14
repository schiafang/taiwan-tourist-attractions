import * as S from '../styles/components/cardHorizontal'
import defaultThumbnail from '../assets/default-thumbnail.png'
import { useEffect, useState } from 'react'

const CardHorizontal = ({
  title,
  startTime,
  endTime,
  position = { PositionLat: null, PositionLon: null },
}) => {
  const [city, setCity] = useState('')

  function formatDate(date) {
    const newDate = new Date(date)

    return newDate.toLocaleDateString('zh-TW')
  }

  return (
    <S.CardWrapper>
      <S.CardImage>
        <img className='thumbnail' src={defaultThumbnail} />
      </S.CardImage>

      <S.CardContent>
        <div className='date'>
          {formatDate(startTime)} - {formatDate(endTime)}
        </div>
        <div className='title'>{title}</div>
        <div className='footer'>
          <span className='city'>{city}</span>
          <span className='link-to-detail'>詳細介紹</span>
        </div>
      </S.CardContent>
    </S.CardWrapper>
  )
}

export default CardHorizontal
