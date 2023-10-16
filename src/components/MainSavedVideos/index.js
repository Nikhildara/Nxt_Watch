import {useContext} from 'react'
import {HiFire} from 'react-icons/hi'
import WatchContext from '../../Context/WatchContext'
import TrendThumbnailItem from '../TrendThumbnailItem'
import {
  TrendingHeadCon,
  TrendingCon,
  TrendIcon,
  TrendingHead,
  TrendingItems,
  NoSavedVideosCon,
  NoSaveImg,
  NoSaveHead,
  NoSavedDes,
} from './StyledComponent'

const MainSavedVideos = () => {
  const context = useContext(WatchContext)
  const {dark, savedVideos} = context
  const isThere = savedVideos.length !== 0

  return (
    <TrendingCon
      dark={dark}
      style={savedVideos.length < 2 ? {height: '94vh'} : null}
    >
      <TrendingHeadCon dark={dark} data-testid="banner">
        <TrendIcon dark={dark}>
          <HiFire />
        </TrendIcon>
        <TrendingHead dark={dark}>Saved Videos</TrendingHead>
      </TrendingHeadCon>
      {isThere ? (
        <TrendingItems dark={dark}>
          {savedVideos.map(e => (
            <TrendThumbnailItem data={e} key={e.id} />
          ))}
        </TrendingItems>
      ) : (
        <NoSavedVideosCon>
          <NoSaveImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
            alt=" no saved videos"
          />
          <NoSaveHead dark={dark}>No saved videos found</NoSaveHead>
          <NoSavedDes dark={dark}>
            You can save your videos while watching them
          </NoSavedDes>
        </NoSavedVideosCon>
      )}
    </TrendingCon>
  )
}

export default MainSavedVideos
