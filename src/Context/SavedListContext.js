import React from 'react'

const SavedListContext = React.createContext({
  savedVideos: [],
  addVideo: () => {},
  removeVideo: () => {},
})

export default SavedListContext
