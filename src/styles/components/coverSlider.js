import styled, { breakpoints } from '../config'

export const SliderSection = styled.section`
  overflow: hidden;
  border-radius: 16px;
  position: relative;

  img {
    height: 185px;
    width: 100%;
    object-fit: cover;

    @media ${breakpoints.desktop} {
      height: 400px;
    }
  }

  .cover-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translateY(-50%) translateX(-50%);

    @media ${breakpoints.desktop} {
      font-size: 28px;
      line-height: 41px;
    }
  }

  .slick-dots {
    bottom: 15px;

    li button:before {
      color: #fff;
      font-size: 8px;
    }
  }

  .slick-prev {
    left: 20px;
    z-index: 10;
  }

  .slick-next {
    right: 20px;
  }

  .slick-next:before,
  .slick-prev:before {
    font-size: 28px;
  }
`
