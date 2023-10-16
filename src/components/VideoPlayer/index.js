import {Component} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import MainPlayer from '../MainPlayer'
import WatchContext from '../../Context/WatchContext'
import {VideoPlayerCon, VideoSidebarCon} from './StyledComponent'

class VideoPlayer extends Component {
  state = {savedVideos: []}

  render() {
    const {savedVideos} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <WatchContext.Consumer>
        {value => {
          const {dark} = value
          console.log(dark)

          return (
            <VideoPlayerCon dark={dark} data-testid="videoItemDetails">
              <Navbar />
              <VideoSidebarCon>
                <SideBar />
                <MainPlayer id={id} />
              </VideoSidebarCon>
            </VideoPlayerCon>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoPlayer
