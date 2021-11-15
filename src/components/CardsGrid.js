import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState, useEffect } from 'react'

import * as S from '../styles/components/cardGrid'
import { useResponsive } from '../utilities/helpers'

const CardGrid = ({ children, slider = true }) => {
  const [data, setData] = useState([])
  const device = useResponsive()
  const numberofCardsPerPage = 15

  const [pagination, setPagenation] = useState({
    currentPage: 1,
    totlePage: 1,
  })

  const startDataIndex = (pagination.currentPage - 1) * numberofCardsPerPage + 1
  const endDataIndex = startDataIndex + numberofCardsPerPage - 1

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: device === 'mobile' ? 1 : 1.5,
    slidesToScroll: 1,
  }

  useEffect(() => {
    if (children) {
      setPagenation((pre) => ({
        ...pre,
        totlePage: Math.ceil(children.length / numberofCardsPerPage),
      }))
    }
  }, [children])

  useEffect(() => {
    if (children) {
      setData(children?.slice(startDataIndex - 1, endDataIndex))
    }
  }, [pagination])

  return slider ? (
    <S.SliderGrid>
      <Slider {...sliderSettings} className='mobile-slider'>
        {children}
      </Slider>
      <div className='desktop-grid'>{children}</div>
    </S.SliderGrid>
  ) : (
    <S.CardsContainer>
      <S.ResponsiveGrid>{data}</S.ResponsiveGrid>
      {pagination.totlePage > 1 && (
        <ul>
          <li
            onClick={() => {
              if (pagination.currentPage === 1) return
              setPagenation((pre) => ({
                ...pre,
                currentPage: pre.currentPage - 1,
              }))
            }}
            className={`prev ${pagination.currentPage === 1 ? 'disabled' : ''}`}
          >
            <svg
              width='8'
              height='12'
              viewBox='0 0 8 12'
              fill='#65895F'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M7.45554 0.705384C7.84481 1.09466 7.84516 1.72569 7.45631 2.11538L3.58016 6L7.45631 9.88462C7.84516 10.2743 7.84481 10.9053 7.45554 11.2946C7.06597 11.6842 6.43435 11.6842 6.04477 11.2946L0.750156 6L6.04477 0.705384C6.43435 0.315811 7.06597 0.315811 7.45554 0.705384Z' />
            </svg>
          </li>

          {Array.from({ length: pagination.totlePage }, (v, index) => {
            return (
              <li
                className={`${
                  pagination.currentPage === index + 1 ? 'active' : 'none'
                } `}
                key={index}
                onClick={() =>
                  setPagenation((pre) => ({
                    ...pre,
                    currentPage: index + 1,
                  }))
                }
              >
                {index + 1}
              </li>
            )
          })}
          <li
            onClick={() => {
              if (pagination.currentPage === pagination.totlePage) return
              setPagenation((pre) => ({
                ...pre,
                currentPage: pre.currentPage + 1,
              }))
            }}
            className={`next ${
              pagination.currentPage === pagination.totlePage ? 'disabled' : ''
            }`}
          >
            <svg
              width='8'
              height='12'
              viewBox='0 0 8 12'
              fill='#65895F'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0.544459 0.705384C0.155187 1.09466 0.154843 1.72569 0.543691 2.11538L4.41984 6L0.54369 9.88462C0.154842 10.2743 0.155187 10.9053 0.544459 11.2946C0.934032 11.6842 1.56565 11.6842 1.95523 11.2946L7.24984 6L1.95523 0.705384C1.56565 0.315811 0.934032 0.315811 0.544459 0.705384Z' />
            </svg>
          </li>
        </ul>
      )}
    </S.CardsContainer>
  )
}

export default CardGrid
