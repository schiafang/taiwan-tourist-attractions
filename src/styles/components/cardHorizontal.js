import styled, { breakpoints } from '../config'

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 62px;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 12px;

  &:hover .thumbnail {
    transform: scale(110%);
  }

  @media ${breakpoints.desktop} {
    height: 160px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
  }
`

export const CardImage = styled.div`
  min-width: 90px;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;

  .thumbnail {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }

  @media ${breakpoints.desktop} {
    width: 160px;
    height: 100%;
    border-radius: 0;
  }
`

export const CardContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;

  .date {
    font-size: 12px;
    color: #646464;
  }

  .title {
    width: 90%;
    font-size: 15px;
    font-weight: 700;
    color: #2f2f2f;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .city {
    font-size: 11px;
    color: #2f2f2f;
  }

  .link-to-detail {
    display: none;
    color: #7f977b;
    font-weight: 500;
    position: relative;
    padding-right: 20px;
  }

  .link-to-detail::after {
    display: block;
    content: '';
    width: 7px;
    height: 7px;
    border-left: 2px solid #7f977b;
    border-top: 2px solid #7f977b;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%) rotate(135deg);
  }

  @media ${breakpoints.desktop} {
    padding: 16px 30px;
    justify-content: start;
    width: 0;
    flex: 1;

    .date {
      font-size: 16px;
      line-height: 23px;
    }

    .title {
      width: 100%;
      font-size: 22px;
      line-height: 60px;
    }

    .footer {
      margin-top: 17px;
      display: flex;
      justify-content: space-between;
    }

    .city,
    .link-to-detail {
      font-size: 16px;
      line-height: 23px;
    }

    .link-to-detail {
      display: inline-block;
    }
  }
`
