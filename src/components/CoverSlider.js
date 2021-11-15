import * as S from '../styles/components/coverSlider'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import defaultCover from '../assets/default-cover.png'
import React from 'react'

const sliderSettings = {
  arrows: true,
  fade: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const CoverSlider = ({ images, showText = false }) => {
  return (
    <S.SliderSection>
      <Slider {...sliderSettings} className='mobile-slider'>
        {images && images?.length > 0 ? (
          images.map((image, index) => {
            return (
              <React.Fragment key={index}>
                <img
                  key={index}
                  src={Object.values(image)[0]}
                  onError={(e) => (e.target.src = defaultCover)}
                />
                {showText && (
                  <span className='cover-text'>{Object.values(image)[1]}</span>
                )}
              </React.Fragment>
            )
          })
        ) : (
          <img src={defaultCover} />
        )}
      </Slider>
    </S.SliderSection>
  )
}

export default CoverSlider
