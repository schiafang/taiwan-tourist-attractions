import styled, { breakpoints } from '../config'
import { FilterContanier } from './banner'

export const SearchBarWrapper = styled(FilterContanier)`
  .keyword-input {
    position: relative;

    input {
      width: 100%;
    }

    button {
      width: 10px;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      color: #7f977b;
      letter-spacing: 0.03em;
    }
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;

    select {
      width: 240px;
    }

    button {
      width: 210px;
    }

    .keyword-input {
      flex: 1;
      margin: 0 15px;
    }
  }
`
