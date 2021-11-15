import styled from '../config'

export const Spinner = styled.div`
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 100vh;
  display: none;
  z-index: 999;
  pointer-events: none;

  &.loading {
    display: flex;
  }

  span {
    margin: auto;
  }
`
