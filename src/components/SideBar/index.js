import {useContext} from 'react'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

// import Sticky from 'react-stickynode'
import MenuListItem from '../MenuListItem'
import WatchContext from '../../Context/WatchContext'
import {
  Sidebar,
  MenuItems,
  ContactCon,
  SocialCon,
  SocialImg,
  ContactUs,
  ContactDes,
} from './StyledComponent'

const MenuData = [
  {id: 1, title: 'Home', icon: <AiFillHome />, route: '/'},
  {id: 2, title: 'Trending', icon: <HiFire />, route: '/trending'},
  {id: 3, title: 'Gaming', icon: <SiYoutubegaming />, route: '/gaming'},
  {id: 4, title: 'Saved videos', icon: <BiListPlus />, route: '/saved-videos'},
]

const SideBar = () => {
  const context = useContext(WatchContext)
  // const {dark} = context
  // console.log(context)

  return (
    <Sidebar dark={context.dark}>
      <MenuItems>
        {MenuData.map(e => (
          <MenuListItem item={e} key={e.id} />
        ))}
      </MenuItems>
      <ContactCon dark={context.dark}>
        <ContactUs>CONTACT US</ContactUs>
        <SocialCon>
          <SocialImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialCon>
        <ContactDes>
          Enjoy! Now to see your channels and recommendations!
        </ContactDes>
      </ContactCon>
    </Sidebar>
  )
}

export default SideBar
