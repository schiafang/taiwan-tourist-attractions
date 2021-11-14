import styled, { breakpoints } from '../config'

export const BreadcrumbWrapper = styled.div`
  margin: 24px 0 16px 0;
  display: flex;
  align-items: center;

  .seperate {
    margin: 0 8px;
  }

  a {
    color: #646464;
  }

  a:hover {
    color: #7f977b;
  }

  @media ${breakpoints.desktop} {
    margin: 60px 0 30px 0;
  }
`
