import styled, { breakpoints } from '../config'

export const SliderSection = styled.section`
  overflow: hidden;
  border-radius: 16px;

  img {
    height: 185px;
    width: 100%;
    object-fit: cover;

    @media ${breakpoints.desktop} {
      height: 400px;
    }
  }
`
