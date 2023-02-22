// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onSelectImage = () => {
    onClickImage(id)
  }

  const imageElement = isActive ? 'image-active' : 'not-active'

  return (
    <li>
      <button type="button" onClick={onSelectImage}>
        <img
          src={thumbnailUrl}
          className={imageElement}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
