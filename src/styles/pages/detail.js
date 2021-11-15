import styled, { breakpoints } from '../config'

export const DetailContainer = styled.div`
  margin: 60px 0;

  .braedcrumb {
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 24px;
    line-height: 35px;
    font-weight: 300;
    color: #1e1e1e;
    margin: 27px 0 10px 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .tags span {
    font-size: 14px;
    line-height: 20px;
    padding: 3px 27px;
    color: #bea363;
    border: 1px solid #bea363;
    border-radius: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  @media ${breakpoints.desktop} {
    section {
      margin: 30px auto;
    }

    .section-title {
      font-size: 36px;
      line-height: 52px;
      margin: 0 0 15px 0;
    }

    .tags > span {
      font-size: 20px;
      line-height: 29px;
    }
  }
`

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #2f2f2f;
  margin: 18px 0 8px 0;

  @media ${breakpoints.desktop} {
    font-size: 20px;
    line-height: 29px;
    margin: 33px 0 10px 0;
  }
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 31px;
  text-align: justify;
  color: #000000;
  white-space: pre-line;

  @media ${breakpoints.desktop} {
    font-size: 18px;
  }
`

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  margin: 30px -15px;
  padding: 30px 15px;

  > * {
    margin: 15px 0;
  }

  @media ${breakpoints.desktop} {
    background-color: transparent;
    padding: 30px 0;
    display: grid;
    grid-template-columns: minmax(300px, 50%) 1fr;
    grid-template-rows: auto auto;
    grid-gap: 0 30px;
    grid-template-areas:
      'info map'
      '. nearby';

    > * {
      margin: 0;
    }
  }
`

export const InfoBox = styled.div`
  width: 100%;
  border-radius: 12px;
  list-style-type: none;
  line-height: 30px;
  letter-spacing: 0.05em;

  li span:first-child {
    font-weight: 500;
  }

  a {
    word-break: break-all;
    color: #7f977b;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
    height: fit-content;
    padding: 30px;
    grid-area: info;
    background-color: #f9f9f9;
  }
`

export const InfoMap = styled.iframe`
  border-radius: 12px;

  @media ${breakpoints.desktop} {
    grid-area: map;
    justify-self: start;
    width: 100%;
    height: 100%;
  }
`

export const InfoNearby = styled.div`
  margin: 0;

  > div:not(:nth-child(1)) > a {
    background: #ffffff;
    border: 1.33px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    letter-spacing: 3px;
    color: #7f977b;
    padding: 12px;
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    white-space: nowrap;

    img {
      margin-bottom: 6px;
    }
  }

  @media ${breakpoints.desktop} {
    grid-area: nearby;

    > div:not(:nth-child(1)) {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -7px;

      > a {
        flex: 1;
        padding: 24px;
        margin: 5px 7px;
      }
    }
  }
`
