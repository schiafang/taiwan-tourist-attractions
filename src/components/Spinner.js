import HashLoader from 'react-spinners/HashLoader'

import * as S from '../styles/components/spinner'

const Spinner = ({ loading }) => {
  return (
    <S.Spinner className={`${loading ? 'loading' : ''} `}>
      <HashLoader color='#65895f' loading={loading} size={50} />
    </S.Spinner>
  )
}

export default Spinner
