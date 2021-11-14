import * as S from '../styles/components/sectionHeader'
import { Link } from 'react-router-dom'

const SectionHeader = ({
  title = '近期活動',
  linktitle = '查看更多活動',
  to = '/',
}) => {
  return (
    <S.SectionHeader>
      <h3>{title}</h3>
      {/* <Link to={to}>{linktitle}</Link> */}
      <span style={{ cursor: 'not-allowed' }}>{linktitle}</span>
    </S.SectionHeader>
  )
}

export default SectionHeader
