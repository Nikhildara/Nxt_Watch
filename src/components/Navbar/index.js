import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import WatchContext from '../../Context/WatchContext'
import {
  NavbarCon,
  Logo,
  IconsCon,
  Moon,
  Sun,
  Menu,
  Cross,
  Logout,
  Button,
  IconConLarge,
  Profile,
  ButtonOut,
  NavMenuCon,
} from './StyledComponent'
import NavMenuItem from '../NavMenuItem'

const MenuItems = [
  {id: 1, title: 'Home', icon: <AiFillHome />, route: '/'},
  {id: 2, title: 'Trending', icon: <HiFire />, route: '/trending'},
  {id: 3, title: 'Gaming', icon: <SiYoutubegaming />, route: '/gaming'},
  {id: 4, title: 'Saved videos', icon: <BiListPlus />, route: '/saved-videos'},
]

class Navbar extends Component {
  state = {showMenu: false}

  ToHome = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    const {showMenu} = this.state
    // console.log(showMenu)

    return (
      <WatchContext.Consumer>
        {value => {
          const {changeTheme, dark, changeActiveTab} = value
          return (
            <>
              <NavbarCon dark={dark}>
                <Button
                  onClick={() => {
                    const {history} = this.props
                    history.push('/')
                    changeActiveTab(1)
                  }}
                >
                  <Logo
                    src={
                      !dark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Button>
                <IconsCon>
                  <Button onClick={() => changeTheme()}>
                    {!dark ? <Moon /> : <Sun />}
                  </Button>
                  <Button
                    onClick={() =>
                      this.setState(prevState => ({
                        showMenu: !prevState.showMenu,
                      }))
                    }
                  >
                    {!showMenu ? <Menu dark={dark} /> : <Cross dark={dark} />}
                  </Button>
                  <Button>
                    <Logout dark={dark} />
                  </Button>
                </IconsCon>
                <IconConLarge>
                  <Button onClick={() => changeTheme()}>
                    {!dark ? <Moon /> : <Sun />}
                  </Button>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <ButtonOut dark={dark}>Logout</ButtonOut>
                </IconConLarge>
              </NavbarCon>
              <NavMenuCon showMenu={showMenu}>
                {MenuItems.map(e => (
                  <NavMenuItem key={e.id} itemData={e} dark={dark} />
                ))}
              </NavMenuCon>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
