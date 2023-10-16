import styled from 'styled-components'

export const TrendingCon = styled.div`
  padding: 0px;
  font-family: 'ROBOTO';
  width: 100vw;
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#0f0f0f')};
  @media (min-width: 768px) {
    width: 80vw;
    // height: 100%;
  }
`
export const TrendingHeadCon = styled.div`
  background-color: ${props => (!props.dark ? '  #f4f4f4' : ' #181818')};
  display: flex;
  align-items: center;
  padding: 8px 15px;
  gap: 10px;
`
export const TrendIcon = styled.div`
  border-radius: 50%;
  background-color: ${props => (!props.dark ? '#cbd5e1' : '#0f0f0f')};
  width: 60px;
  padding: 13px 15px;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 30px;
  color: red;
`
export const TrendingHead = styled.h1`
  color: ${props => (!props.dark ? '#475569' : '#f9f9f9')};
  font-size: 20px;
`
export const TrendingItems = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`
export const NoSavedVideosCon = styled.div`
  height: 70%;
  padding: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSaveImg = styled.img`
  width: 250px;
  @media (min-width: 768px) {
    width: 350px;
  }
`
export const NoSaveHead = styled.h1`
  color: ${props => (!props.dark ? 'black' : 'White')}}
  font-size: 16px;
`
export const NoSavedDes = styled.p`
color: ${props => (!props.dark ? 'black' : 'White')}}
  font-size: 13px;
`
