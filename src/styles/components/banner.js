import styled, { breakpoints } from '../config'

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  @media ${breakpoints.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 80px 95px;

    > section:nth-child(1) {
      padding: 0 95px 30px 0;
    }

    > section:nth-child(2) {
      flex: 1;
    }
  }
`

export const Title = styled.h1`
  font-size: 28px;
  line-height: 41px;
  letter-spacing: 0.03em;
  font-weight: 300;
  color: #1e1e1e;
  text-align: center;

  .title-spot {
    border-bottom: 2px solid #e0da48;
  }

  @media ${breakpoints.desktop} {
    font-size: 48px;
    line-height: 70px;
    text-align: left;
  }
`

export const SubTitle = styled.h2`
  letter-spacing: 0.03em;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  white-space: nowrap;

  > * {
    margin-right: 6px;
  }

  > span:nth-child(3) {
    font-family: Playfair Display;
    font-weight: bold;
    font-size: 12px;
  }

  @media ${breakpoints.desktop} {
    font-size: 20px;
    justify-content: start;

    > span:nth-child(3) {
      font-family: Playfair Display;
      font-weight: bold;
      font-size: 18px;
    }
  }
`

export const FilterContanier = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 35px 0;

  select,
  input,
  button {
    height: 50px;
    border-radius: 5px;
    margin-bottom: 7px;
    border: 1px solid #e6e6e6;
    outline: 0;
    padding: 0 30px;
    color: #7f977b;
    font-weight: 500;
    font-size: 16px;
  }

  select {
    cursor: pointer;
  }

  input {
    border: 1px solid #e6e6e6;
    font-weight: 400;

    &::placeholder {
      color: #9e9e9e;
    }
  }

  button {
    cursor: pointer;
    border: 1px solid #7f977b;
    background-color: #7f977b;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 10px;

    > * {
      margin: 0 15px;
    }
  }

  @media ${breakpoints.desktop} {
    min-width: 350px;
    margin: 0 auto;
  }
`
