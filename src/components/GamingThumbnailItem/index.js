import {Link} from 'react-router-dom'
import {
  GamingThumbCon,
  GamingImg,
  GamingDesCon,
  GamingTitle,
  GamingViews,
} from './StyledComponent'

const GamingThumbnailItem = props => {
  const {data, dark} = props
  const {id, thumbnailUrl, title, viewCount} = data

  return (
    <Link to={`/videos/${id}`} style={{'text-decoration': 'none'}}>
      <GamingThumbCon>
        <GamingImg src={thumbnailUrl} alt="thumbnail image" />
        <GamingDesCon>
          <GamingTitle dark={dark}>{title}</GamingTitle>
          <GamingViews dark={dark}>{viewCount} Watching Worldwide</GamingViews>
        </GamingDesCon>
      </GamingThumbCon>
    </Link>
  )
}

export default GamingThumbnailItem
