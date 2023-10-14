import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${props => (props.dark ? '#212121' : 'white')};
  padding: 15px 5px;
  width: 20vw;
  height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`

export const MenuItems = styled.ul`
  list-style: none;
  padding-left: 0;
`
export const ContactCon = styled.div`
  color: ${props => (props.dark ? 'white' : 'black')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const SocialCon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const SocialImg = styled.img`
  width: 40px;
  border-radius: 50%;
`

export const ContactUs = styled.h1`
  font-size: 15px;
`
export const ContactDes = styled.p`
  font-size: 13px;
  width: 85%;
`
