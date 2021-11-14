import styled, { breakpoints } from './config'

export const AppWrapper = styled.div`
  position: relative;
  padding-bottom: 80px;
  main {
    overflow-x: hidden;
    padding: 0 15px 80px 15px;
  }

  @media ${breakpoints.desktop} {
    main {
      position: relative;
      top: 80px;
      padding: 0 45px 130px 45px;
    }
  }
`
