import styled from 'styled-components'

export const NotfoundPage = styled.div`
  padding: 0px;
  font-family: 'Roboto';
`
export const NotfoundMain = styled.div`
  padding: 0px;
  display: flex;
  background-color: ${props => (!props.dark ? 'white' : ' #181818')};
`
export const NotfoundCon = styled.div`
  padding: 0px;
  background-color: ${props => (!props.dark ? 'white' : ' #181818')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`
export const NotfoundImg = styled.img`
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
`
export const NotFoundHead = styled.h1`
  font-size: 15px;
  color: ${props => (!props.dark ? ' #1e293b' : 'white')};
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const NotFoundDes = styled.p`
  font-size: 15px;
  color: #475569;
`
