import {Component} from 'react'
import WatchContext from '../../Context/WatchContext'
import {TrendingPage, TrendingCon} from './StyledComponent'
import Navbar from '../Navbar'
import MainTrending from '../MainTrending'
import Sidebar from '../SideBar'

class Trending extends Component {
  state = {data: []}

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <TrendingPage>
              <Navbar />
              <TrendingCon>
                <Sidebar />
                <MainTrending dark={dark} />
              </TrendingCon>
            </TrendingPage>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Trending
