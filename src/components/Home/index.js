import {useContext} from 'react'
import {HomeCon, HomeSubCon} from './StyledComponent'
import MainHome from '../MainHome'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import WatchContext from '../../Context/WatchContext'

const Home = () => {
  const context = useContext(WatchContext)
  const {dark} = context
  return (
    <HomeCon dark={dark} data-testid="home">
      <Navbar />
      <HomeSubCon>
        <SideBar />
        <MainHome />
      </HomeSubCon>
    </HomeCon>
  )
}

export default Home
