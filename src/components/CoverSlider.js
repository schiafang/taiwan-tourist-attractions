import * as S from '../styles/components/coverSlider'
import defaultCover from '../assets/ScenicSpotPicture.png'
// import defaultCover from '../assets/default-cover.png'

const CoverSlider = ({ image }) => {
  return (
    <S.SliderSection>
      {image?.PictureUrl1 ? (
        <img src={image?.PictureUrl1} />
      ) : (
        <img src={defaultCover} />
      )}
    </S.SliderSection>
  )
}

export default CoverSlider
