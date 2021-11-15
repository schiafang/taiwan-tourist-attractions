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

export const CardsContainer = styled.div`
  ul {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 100px 0;
  }

  li {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #65895f;
    margin: 0 6px;
    cursor: pointer;
  }

  li:hover {
    background: #65895f20;
  }

  li.active {
    border: 1px solid #65895f;
  }

  .disabled,
  .disabled:hover {
    background-color: #e5e5e5;
    opacity: 0.5;
    cursor: default;

    svg {
      fill: #ffffff;
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
