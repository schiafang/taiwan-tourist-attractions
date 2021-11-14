import styled, { breakpoints } from '../config'

export const Header = styled.header`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 10;
  padding: 0 15px;

  @media ${breakpoints.desktop} {
    position: fixed;
    top: 0;
    justify-content: space-between;
    padding: 0 45px;
  }
`

export const NavMenu = styled.div`
  display: flex;
  background-color: #fff;

  > a {
    cursor: pointer;
    color: inherit;
    line-height: 28px;
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid transparent;
  }

  > a:hover,
  > a.active {
    color: #65895f;
    border-bottom: 2px solid #e0da48;
  }

  @media ${breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    transform: scale(0);
    transform-origin: top right;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    border-radius: 0 0 0 30px;
    opacity: 0;
    padding: 24px 0;
    transition: all 0.4s ease-in;

    &.display {
      transform: scale(1);
      opacity: 1;
    }

    > div:first-child {
      margin: 0 128px 30px 30px;
    }

    > a {
      margin: 20px 0;
    }
  }

  @media ${breakpoints.desktop} {
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    > a {
      margin-left: 20px;
    }

    .nav-close-btn {
      display: none;
    }
  }
`

export const Burger = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a8b8a5;
  position: fixed;
  top: 15px;
  right: 15px;

  @media ${breakpoints.desktop} {
    display: none;
  }
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`
