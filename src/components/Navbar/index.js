import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
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
  PopupCon,
  ModelDes,
  BtnCon,
  CancelBtn,
  LogoutBtn,
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
    history.replace('/')
  }

  ToLogin = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderLogoutBtn = dark => (
    <Popup
      modal
      trigger={
        <Button>
          <Logout dark={dark} />
        </Button>
      }
      overlayStyle={{backgroundColor: 'rgba(21, 21, 21, 0.44)'}}
    >
      {close => (
        <PopupCon dark={dark}>
          <ModelDes dark={dark}>Are you sure, you want to logout</ModelDes>
          <BtnCon>
            <CancelBtn onClick={close} dark={dark}>
              Cancel
            </CancelBtn>
            <LogoutBtn onClick={this.ToLogin} dark={dark}>
              Confirm
            </LogoutBtn>
          </BtnCon>
        </PopupCon>
      )}
    </Popup>
  )

  renderLogoutBtnMD = dark => (
    <Popup
      modal
      trigger={<ButtonOut dark={dark}>Logout</ButtonOut>}
      overlayStyle={{backgroundColor: 'rgba(21, 21, 21, 0.44)'}}
    >
      {close => (
        <PopupCon dark={dark}>
          <ModelDes dark={dark}>Are you sure, you want to logout</ModelDes>
          <BtnCon>
            <CancelBtn onClick={close} dark={dark}>
              Cancel
            </CancelBtn>
            <LogoutBtn onClick={this.ToLogin} dark={dark}>
              Confirm
            </LogoutBtn>
          </BtnCon>
        </PopupCon>
      )}
    </Popup>
  )

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
                <Link to="/">
                  <Logo
                    src={
                      !dark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                    onClick={() => changeActiveTab(1)}
                  />
                </Link>
                <IconsCon>
                  <Button onClick={() => changeTheme()} data-testid="theme">
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
                  {this.renderLogoutBtn(dark)}
                </IconsCon>
                <IconConLarge>
                  <Button onClick={() => changeTheme()} data-testid="theme">
                    {!dark ? <Moon /> : <Sun />}
                  </Button>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  {this.renderLogoutBtnMD(dark)}
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
