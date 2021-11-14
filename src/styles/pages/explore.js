import styled, { breakpoints } from '../config'

export const Title = styled.div`
  display: flex;
  align-items: flex-end;

  h2 {
    font-weight: 300;
    font-size: 24px;
    line-height: 35px;
    color: #1e1e1e;
  }

  @media ${breakpoints.desktop} {
    margin-top: 60px;

    h2 {
      font-size: 36px;
      line-height: 52px;
    }
  }
`

export const CategoryWrapper = styled.div`
  display: grid;
  margin: 0 -8px;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 -15px;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const CategoryCard = styled.div`
  position: relative;
  margin: 8px;
  flex: 1;

  @media only screen and (min-width: 992px) {
    margin: 6px 15px;
  }

  img {
    width: 100%;
    z-index: 0;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translateX(-50%) translateY(-50%);
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    white-space: nowrap;

    @media ${breakpoints.desktop} {
      font-size: 24px;
      line-height: 35px;
    }
  }
`
