import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {MenuItem, ItemName, StyledIcon} from './StyledComponent'
import WatchContext from '../../Context/WatchContext'

const MenuListItem = props => {
  const {item} = props
  const {id, title, icon, route} = item
  const context = useContext(WatchContext)
  // console.log(context)
  const {activeTab, changeActiveTab, dark} = context

  const changeTab = () => {
    changeActiveTab(id)
  }

  const isActive = activeTab === id
  // console.log(isActive, id)

  return (
    <Link to={route} style={{'text-decoration': 'none'}}>
      <MenuItem onClick={changeTab} dark={dark} isActive={isActive}>
        <StyledIcon isActive={isActive} dark={dark}>
          {icon}
        </StyledIcon>
        <ItemName dark={context.dark} isActive={isActive}>
          {title}
        </ItemName>
      </MenuItem>
    </Link>
  )
}

export default MenuListItem
