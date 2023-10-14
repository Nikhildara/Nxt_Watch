import {SavedVideosPage, SavedVideosSidebarCon} from './StyledComponent'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import MainSavedVideos from '../MainSavedVideos'

const SavedVideos = () => {
  const Hello = 'Hello'
  return (
    <SavedVideosPage>
      <Navbar />
      <SavedVideosSidebarCon>
        <SideBar />
        <MainSavedVideos />
      </SavedVideosSidebarCon>
    </SavedVideosPage>
  )
}

export default SavedVideos
