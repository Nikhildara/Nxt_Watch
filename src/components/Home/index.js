import {Component} from 'react'
import {HomeCon, HomeSubCon} from './StyledComponent'
import MainHome from '../MainHome'
import Navbar from '../Navbar'
import SideBar from '../SideBar'

class Home extends Component {
  state = {dark: false}

  render() {
    const {dark} = this.state
    return (
      <HomeCon>
        <Navbar />
        <HomeSubCon>
          <SideBar />
          <MainHome />
        </HomeSubCon>
      </HomeCon>
    )
  }
}

export default Home
