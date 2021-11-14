import * as S from '../styles/components/noDatafound'
import IconNoData from '../assets/no-found.svg'

const NoDataFound = () => {
  return (
    <S.Wrapper>
      <img src={IconNoData} />
      <h2>
        目前查無資料
        <br />
        請重新搜尋
      </h2>
    </S.Wrapper>
  )
}

export default NoDataFound
