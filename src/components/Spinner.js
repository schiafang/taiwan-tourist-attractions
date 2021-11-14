import BeatLoader from 'react-spinners/BeatLoader'
import * as S from '../styles/components/spinner'

const Spinner = ({ loading }) => {
  console.log(`lodaing`, loading)
  return (
    <S.Spinner className={`${loading} ? loading :''`}>
      <BeatLoader color='#65895f' loading={loading} size={15} margin={5} />
    </S.Spinner>
  )
}

export default Spinner
