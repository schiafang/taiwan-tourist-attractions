import styled, { breakpoints } from '../config'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  padding: 0 15px;

  &:hover .thumbnail {
    transform: scale(110%);
  }

  @media ${breakpoints.desktop} {
    padding: 0;
  }
`

export const CardImage = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  border-radius: 20px;
  background-color: #eee;

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }

  @media ${breakpoints.desktop} {
    height: 200px;
  }
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    color: #2f2f2f;
    font-size: 17px;
    font-weight: 700;
    margin: 6px 0 4px 0;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .city {
    color: #646464;
    height: 23px;
    font-size: 15px;
    line-height: 23px;
    display: flex;
    align-items: center;
  }

  .city > img {
    margin-right: 4px;
  }

  @media ${breakpoints.desktop} {
    height: auto;

    .title {
      font-size: 20px;
      margin: 10px 0 6px 0;
      line-height: 32px;
    }

    .city {
      font-size: 16px;
    }
  }
`
