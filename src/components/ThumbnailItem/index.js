import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  ThumbnailItemCon,
  ThumbnailImage,
  ThumbnailDetailsCon,
  ProfileCon,
  Profile,
  ThumbnailDetails,
  ThumbHead,
  ThumbDetails,
} from './StyledComponent'
import WatchContext from '../../Context/WatchContext'

const ThumbnailItem = props => {
  const {data} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = data
  const parsedDate = new Date(publishedAt)
  const published = formatDistanceToNow(
    new Date(
      parsedDate.getFullYear(),
      parsedDate.getMonth(),
      parsedDate.getDate(),
    ),
    {addSuffix: true},
  )

  const indexOfSpace = published.indexOf(' ')
  const publishedBef = published.slice(indexOfSpace + 1)

  const context = useContext(WatchContext)
  // console.log(context)

  return (
    <Link to={`/videos/${id}`} style={{'text-decoration': 'none'}}>
      <ThumbnailItemCon>
        <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
        <ThumbnailDetailsCon>
          <ProfileCon>
            <Profile src={channel.profile_image_url} alt="profile" />
          </ProfileCon>
          <ThumbnailDetails>
            <ThumbHead dark={context.dark}>{title}</ThumbHead>
            <ThumbDetails>
              {channel.name} &#x2022; {viewCount} views &#x2022; {publishedBef}
            </ThumbDetails>
          </ThumbnailDetails>
        </ThumbnailDetailsCon>
      </ThumbnailItemCon>
    </Link>
  )
}

export default ThumbnailItem
