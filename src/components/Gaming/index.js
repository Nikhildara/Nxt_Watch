import {useContext} from 'react'
import WatchContext from '../../Context/WatchContext'
import Navbar from '../Navbar'
import Sidebar from '../SideBar'
import MainGaming from '../MainGaming'
import {GamingCon, GamingPage} from './StyledComponent'

const Gaming = () => {
  const {dark} = useContext(WatchContext)
  return (
    <GamingPage>
      <Navbar />
      <GamingCon>
        <Sidebar />
        <MainGaming dark={dark} />
      </GamingCon>
    </GamingPage>
  )
}

export default Gaming
