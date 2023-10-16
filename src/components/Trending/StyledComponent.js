import styled from 'styled-components'

export const TrendingCon = styled.div`
  padding: 0px;
  font-family: 'ROBOTO';
  @media (min-width: 768px) {
    display: flex;
  }
`
// export const TrendingHeadCon = styled.div`
//   background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
//   display: flex;
//   align-items: center;
//   padding: 13px 15px;
//   gap: 10px;
// `
// export const TrendIcon = styled.div`
//   border-radius: 50%;
//   background-color: #cbd5e1;
//   width: 60px;
//   padding: 13px 15px;
//   display: flex;
//   justify-items: center;
//   align-items: center;
//   font-size: 30px;
//   color: red;
// `
export const TrendingHead = styled.h1`
  color: #475569;
  font-size: 25px;
`
export const TrendingPage = styled.div`
  padding: 0px;
  background-color: ${props => (!props.dark ? '#f9f9f9' : '#0f0f0f')};
`
