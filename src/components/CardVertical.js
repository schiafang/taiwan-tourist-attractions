import * as S from '../styles/components/cardVertical'
import defaultImage from '../assets/default-image.png'
import spotIcon from '../assets/spot.svg'
import { Link } from 'react-router-dom'

const CardVertical = ({ ID, type, title, image, city }) => {
  return (
    <Link to={`/detail/${type}/${ID}`}>
      <S.CardWrapper>
        <S.CardImage>
          <img
            className='thumbnail'
            src={image ? image : defaultImage}
            onError={(e) => (e.target.src = defaultImage)}
          />
        </S.CardImage>

        <S.CardContent>
          <div className='title'>{title}</div>
          <div className='city'>
            {city ? (
              <>
                <img src={spotIcon} />
                {city}
              </>
            ) : null}
          </div>
        </S.CardContent>
      </S.CardWrapper>
    </Link>
  )
}

export default CardVertical
