import styled, { breakpoints } from '../config'

export const SliderGrid = styled.div`
  margin: 0 -15px;

  .desktop-grid {
    display: none;
  }

  @media ${breakpoints.desktop} {
    .mobile-slider {
      display: none;
    }

    .desktop-grid {
      display: flex;
      width: 100%;

      > a {
        width: 0;
        flex: 1;
        padding: 0 15px;
      }
    }
  }
`

export const ResponsiveGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > a {
    width: 0;
    min-width: 210px;
    margin: 15px;
    flex: 1 1 0;

    > div {
      padding: 0;
    }
  }
`
