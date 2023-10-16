import Styled from 'styled-components'

export const HomeCon = Styled.div`
  // height:100vh;
  font-family:'Roboto';
  background-color:${props => (!props.dark ? '#f9f9f9 ' : '#181818')}
`

export const HomeSubCon = Styled.div`
 display:flex;

`
