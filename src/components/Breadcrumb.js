import { Link } from 'react-router-dom'
import * as S from '../styles/components/breadcrumb'

const Breadcrumb = ({ breadcrumbPath }) => {
  return (
    <S.BreadcrumbWrapper>
      <Link to='/'>首頁</Link>
      {breadcrumbPath.map(({ label, path }, index) => {
        return label ? (
          <div key={index}>
            <span className='seperate'>/</span>
            {path ? <Link to={path}>{label}</Link> : <span>{label}</span>}
          </div>
        ) : null
      })}
    </S.BreadcrumbWrapper>
  )
}

export default Breadcrumb
