import {useContext} from 'react'
import {Link} from 'react-router-dom'
import WatchContext from '../../Context/WatchContext'
import {MenuItem, StyledIcon, MenuName} from './StyledComponent'

const NavMenuItem = props => {
  const {itemData, dark} = props
  const {id, title, icon, route} = itemData
  // console.log(icon)

  const context = useContext(WatchContext)
  const {activeTab, changeActiveTab} = context

  const changeTab = () => {
    changeActiveTab(id)
  }

  const isActive = activeTab === id

  return (
    <Link to={route} style={{'text-decoration': 'none'}}>
      <MenuItem dark={dark} onClick={changeTab} isActive={isActive}>
        <StyledIcon dark={dark} isActive={isActive}>
          {icon}
        </StyledIcon>
        <MenuName dark={dark} isActive={isActive}>
          {title}
        </MenuName>
      </MenuItem>
    </Link>
  )
}

export default NavMenuItem
