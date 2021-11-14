import styled, { breakpoints } from '../config'

export const DisplaySection = styled.section`
  margin-top: 36px;

  @media ${breakpoints.desktop} {
    .card-list-wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }

    .card-list-wrapper > a {
      flex: 50%;
      max-width: 50%;
      padding: 0 15px;
    }
  }
`
