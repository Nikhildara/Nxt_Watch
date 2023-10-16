// eslint-disable-next-line import/no-duplicates
// import Styled from 'styled-components'
// eslint-disable-next-line import/no-duplicates
import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {BiMenu} from 'react-icons/bi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'
// import {AiFillHome} from 'react-icons/ai'

export const NavbarCon = styled.nav`
  background-color: ${props => (!props.dark ? 'white' : ' #212121')};
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  width: 100%;
  //  position: fixed;
`

export const Logo = styled.img`
  width: 150px;
`

export const IconsCon = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  // Change width...
  @media (min-width: 768px) {
    display: none;
  }
`

export const Moon = styled(FaMoon)`
  color: ${props => (!props.dark ? 'black' : 'white')};
  font-size: 25px;
`
export const Sun = styled(FiSun)`
  color: white;
  font-size: 25px;
`

export const Menu = styled(BiMenu)`
  color: ${props => (!props.dark ? 'black' : 'white')};
  font-size: 30px;
`

export const Cross = styled(ImCross)`
  color: ${props => (!props.dark ? 'black' : 'white')};
  font-size: 20px;
  width: 30px;
`

export const Logout = styled(FiLogOut)`
  color: ${props => (!props.dark ? 'black' : 'white')};
  font-size: 30px;
`
export const Button = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
export const MenuCon = styled.ul`
  list-style: none;
  padding-left: 0;
`
export const IconConLarge = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 767px) {
    display: none;
  }
`
export const Profile = styled.img`
  width: 28px;
  margin-bottom: 5px;
`

export const ButtonOut = styled.button`
  background-color: transparent;
  color: ${props => (!props.dark ? ' #3b82f6 ' : ' white')};
  border: 2px solid ${props => (!props.dark ? ' #3b82f6 ' : ' white')};
  padding: 6px 13px;
  border-radius: 2px;
  font-weight: 600;
  margin-bottom: 5px;
`
// export const NavMenuCon = styled.ul`
//   display: ${props => (props.showMenu ? 'block' : 'none')};
//   list-style: none;
//   padding-left: 0;
//   margin: 0px;
//   transition: display 1s ease-in-out;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `
export const NavMenuCon = styled.ul`
  max-height: ${props => (props.showMenu ? '400px' : '0')};
  overflow: hidden;
  list-style: none;
  padding-left: 0;
  margin: 0px;
  transition: max-height 0.5s ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`
// export const NavMenuCon = styled.ul`
//   opacity: ${props => (props.showMenu ? 1 : 0)};
//   list-style: none;
//   padding-left: 0;
//   margin: 0px;
//   transition: opacity 0.3s ease; /* Add a transition for opacity */
// `

// export const NavMenuCon = styled.ul`
//   display: ${props => (!props.showMenu ? 'block' : 'none')};
//   list-style: none;
//   padding-left: 0;

// `

// style={!showMenu && {display: 'none'}}
export const PopupCon = styled.div`
  height: 180px;
  width: 350px;
  background-color: ${props => (!props.dark ? 'white' : '#231f20')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Roboto';
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border-radius: 3px;
  color: #7e858e;
  border: 1px solid #94a3b8;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
`
export const LogoutBtn = styled.button`
  background-color: #3b82f6;
  border-radius: 3px;
  color: white;
  border: 0px;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
`
export const BtnCon = styled.div`
  display: flex;
  justify-content: space-around;
  width: 65%;
`
export const ModelDes = styled.p`
  font-size: 17px;
  color: ${props => (!props.dark ? ' #00306e ' : 'white')};
`
