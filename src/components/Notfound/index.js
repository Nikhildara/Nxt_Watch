import {useContext} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../SideBar'
import WatchContext from '../../Context/WatchContext'
import {
  NotfoundPage,
  NotfoundMain,
  NotfoundCon,
  NotfoundImg,
  NotFoundHead,
  NotFoundDes,
} from './StyledComponent'

const Notfound = () => {
  const context = useContext(WatchContext)
  const {dark} = context
  return (
    <NotfoundPage>
      <Navbar />
      <NotfoundMain dark={dark}>
        <Sidebar />
        <NotfoundCon dark={dark}>
          <NotfoundImg
            src={
              !dark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            }
            alt="not found"
          />
          <NotFoundHead dark={dark}>Page Not Found</NotFoundHead>
          <NotFoundDes dark={dark}>
            we are sorry, the page you requested could not be found.
          </NotFoundDes>
        </NotfoundCon>
      </NotfoundMain>
    </NotfoundPage>
  )
}

export default Notfound
