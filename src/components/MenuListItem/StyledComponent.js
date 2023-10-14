import styled from 'styled-components'

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0px;
  // border: 1px solid gray;
  padding: 0px 10px;
  background-color: ${props => {
    if (props.dark && props.isActive) {
      return '#606060'
    }
    if (props.dark === true && props.isActive === false) {
      return 'transparent'
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
  font-size: 20px;
  color: ${props => {
    if (props.dark && props.isActive) {
      return 'red'
    }
    if (props.dark === true && props.isActive === false) {
      return 'grey'
    }
    if (props.dark === false && props.isActive === true) {
      return 'red'
    }
    return 'black'
  }};
  width: 15%;
`
export const ItemName = styled.p`
  // color: black;
  font-size: 15px;
  margin: 10px 2px;
  // color: #383838;
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
  color: ${props => (props.dark ? 'grey' : ' #383838')};
  color: ${props => {
    if (props.dark && props.isActive) {
      return 'white'
    }
    if (props.dark === true && props.isActive === false) {
      return 'grey'
    }
    if (props.dark === false && props.isActive === true) {
      return 'black'
    }
    return 'black'
  }};
`
