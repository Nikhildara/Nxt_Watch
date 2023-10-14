import React from 'react'

const WatchContext = React.createContext({
  dark: false,
  changeTheme: () => {},
  activeTab: 1,
  changeActiveTab: () => {},
  savedVideos: [],
  addVideo: () => {},
  removeVideo: () => {},
  likedDisliked: [],
  addLikeDis: () => {},
  removeLikeDis: () => {},
})

export default WatchContext
