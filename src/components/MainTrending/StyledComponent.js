import styled from 'styled-components'

export const TrendingCon = styled.div`
  padding: 0px;
  font-family: 'ROBOTO';
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#0f0f0f')};
  @media (min-width: 768px) {
    width: 80vw;
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
export const LoaderCon = styled.div`
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94vh;
`
export const NoResultCon = styled.div`
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94vh;
`
export const NoResultImg = styled.img`
  width: 220px;
  @media (min-width: 768px) {
    width: 230px;
  }
`
export const NoResultHead = styled.h1`
  color: ${props => (!props.dark ? '#181818' : '  #f9f9f9')};
  font-size: 17px;
  font-weight: 500;
`
export const NoResultDes = styled.p`
  color: gray;
  font-size: 12px;
  max-width: 220px;
  text-align: center;
`
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  border: 0px;
  padding: 8px 20px;
  color: white;
  border-radius: 5px;
`
