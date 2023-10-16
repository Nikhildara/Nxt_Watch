import {useContext} from 'react'
import {SavedVideosPage, SavedVideosSidebarCon} from './StyledComponent'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import MainSavedVideos from '../MainSavedVideos'
import WatchContext from '../../Context/WatchContext'

const SavedVideos = () => {
  const context = useContext(WatchContext)
  const {dark} = context
  return (
    <SavedVideosPage dark={dark} data-testid="savedVideos">
      <Navbar />
      <SavedVideosSidebarCon>
        <SideBar />
        <MainSavedVideos />
      </SavedVideosSidebarCon>
    </SavedVideosPage>
  )
}

export default SavedVideos
