import {Component} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import MainPlayer from '../MainPlayer'
import SavedListContext from '../../Context/SavedListContext'
import {VideoPlayerCon, VideoSidebarCon} from './StyledComponent'

class VideoPlayer extends Component {
  state = {savedVideos: []}

  addVideo = videoData => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoData],
    }))
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedData = savedVideos.filter(e => e.id !== id)
    this.setState({savedVideos: updatedData})
  }

  render() {
    const {savedVideos} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <SavedListContext.Provider
        value={{
          savedVideos,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <VideoPlayerCon>
          <Navbar />
          <VideoSidebarCon>
            <SideBar />
            <MainPlayer id={id} />
          </VideoSidebarCon>
        </VideoPlayerCon>
      </SavedListContext.Provider>
    )
  }
}

export default VideoPlayer
