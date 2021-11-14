import styled, { breakpoints } from '../config'

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h3 {
    font-size: 24px;
    margin-bottom: 12px;
    font-weight: 300;

    @media ${breakpoints.desktop} {
      font-size: 36px;
    }
  }

  a {
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #ff725e;
    position: relative;
    padding-right: 15px;
  }

  a::after {
    display: block;
    content: '';
    width: 4px;
    height: 4px;
    border-left: 2px solid #ff725e;
    border-top: 2px solid #ff725e;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%) rotate(135deg);
  }
`
