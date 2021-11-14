import styled, { breakpoints } from '../config'

export const SearchPageWrapper = styled.div``

export const Title = styled.div`
  display: flex;
  align-items: flex-end;

  h2 {
    font-weight: 300;
    font-size: 24px;
    line-height: 35px;
    color: #1e1e1e;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #646464;
    margin: 0 0 6px 6px;
  }

  span.color {
    color: #bea363;
    margin: 0 3px;
  }

  @media ${breakpoints.desktop} {
    margin-top: 60px;

    h2 {
      font-size: 36px;
      line-height: 52px;
    }

    span {
      font-size: 18px;
      line-height: 26px;
    }
  }
`

export const ResultArea = styled.div`
  margin: 0 -15px;
`
