import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'

import * as S from '../styles/components/cardGrid'
import { useResponsive } from '../utilities/helpers'

const CardGrid = ({ children, slider = true }) => {
  const device = useResponsive()
  const [pagination, setPagenation] = useState({
    currentPage: 1,
    totlePage: 1,
  })

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: device === 'mobile' ? 1 : 1.5,
    slidesToScroll: 1,
  }

  console.log(`children`, children)

  return slider ? (
    <S.SliderGrid>
      <Slider {...sliderSettings} className='mobile-slider'>
        {children}
      </Slider>
      <div className='desktop-grid'>{children}</div>
    </S.SliderGrid>
  ) : (
    <S.ResponsiveGrid>{children}</S.ResponsiveGrid>
  )
}

export default CardGrid
