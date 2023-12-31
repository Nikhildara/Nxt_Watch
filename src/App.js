import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProjectedRoute from './components/ProtectedRoute'
import WatchContext from './Context/WatchContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoPlayer from './components/VideoPlayer'
import SavedVideos from './components/SavedVideos'
import Notfound from './components/Notfound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {dark: false, activeTab: 1, savedVideos: [], likedDisliked: []}

  changeTheme = () => {
    this.setState(prevState => ({dark: !prevState.dark}))
  }

  changeActiveTab = id => {
    this.setState({activeTab: id})
  }

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

  addLikeDis = videoData => {
    this.setState(prevState => ({
      likedDisliked: [...prevState.savedVideos, videoData],
    }))
  }

  removeLikeDis = id => {
    const {likedDisliked} = this.state
    const updatedData = likedDisliked.filter(e => e.likeId !== id)
    this.setState({likedDisliked: updatedData})
  }

  render() {
    const {dark, activeTab, savedVideos, likedDisliked} = this.state
    // console.log(savedVideos)

    return (
      <WatchContext.Provider
        value={{
          dark,
          changeTheme: this.changeTheme,
          activeTab,
          changeActiveTab: this.changeActiveTab,
          savedVideos,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
          likedDisliked,
          addLikeDis: this.addLikeDis,
          removeLikeDis: this.removeLikeDis,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProjectedRoute exact path="/" component={Home} />
          <ProjectedRoute exact path="/trending" component={Trending} />
          <ProjectedRoute exact path="/gaming" component={Gaming} />
          <ProjectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <ProjectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={Notfound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}
export default App
