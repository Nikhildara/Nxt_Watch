import styled from 'styled-components'

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  // justify-content: center;
  border-bottom: 1px solid lightgray;
  background-color: ${props => {
    if (props.dark && props.isActive) {
      return '#606060'
    }
    if (props.dark === true && props.isActive === false) {
      return '#383838'
    }
    if (props.dark === false && props.isActive === true) {
      return '#d5ebf2'
    }
    return 'white'
  }};
`

export const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${props => {
    if (props.dark && props.isActive) {
      return 'red'
    }
    if (props.dark === true && props.isActive === false) {
      return 'white'
    }
    if (props.dark === false && props.isActive === true) {
      return 'red'
    }
    return 'black'
  }};
  width: 10%;
`
export const MenuName = styled.p`
  color: black;
  font-size: 15px;
  font-weight: ${props => {
    if (props.dark && props.isActive) {
      return 600
    }
    if (props.dark === true && props.isActive === false) {
      return 400
    }
    if (props.dark === false && props.isActive === true) {
      return 600
    }
    return 400
  }};
  color: ${props => (!props.dark ? 'black' : 'white')};
`
