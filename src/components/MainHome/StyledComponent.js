import styled from 'styled-components'

export const MainHomeCon = styled.div`
  // width: 98vw;
  @media (min-width: 768px) {
    width: 75vw;
  }
`

export const PremiumCard = styled.div`
  display: ${props => (props.showAdd ? 'block' : 'none')};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  // background-repeat: no-repeat;
  height: 30vh;
  font-family: 'ROBOTO';
  padding: 20px;

  @media (min-width: 576px) {
    height: 38vh;
  }
  @media (min-width: 768px) {
    display: ${props => (props.showAdd ? 'block' : 'none')};
    height: 40vh;
    width: 78vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 30px;
  }
  @media (min-width: 1200px) {
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 30px;
  }
`
export const Logo = styled.img`
  width: 90px;
  @media (min-width: 576px) {
    width: 90px;
  }
  @media (min-width: 768px) {
    width: 110px;
  }
  @media (min-width: 1200px) {
    width: 110px;
  }
`
export const CardDes = styled.p`
  color: black;
  font-size: 15px;
  width: 250px;
  @media (min-width: 576px) {
    font-size: 15px;
    width: 250px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
    width: 250px;
  }
  @media (min-width: 1200px) {
    font-size: 15px;
    width: 250px;
  }
`
export const GETBtn = styled.button`
  border: 1px solid black;
  background-color: transparent;
  padding: 10px 15px;
  font-weight: 600;
`
export const CloseIconCon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
export const ButtonClose = styled.button`
  background-color: transparent;
  border: 0px;
`

export const HomeContentCon = styled.div`
  //   width: 97vw;
  @media (min-width: 768px) {
    width: 78vw;
  }
`
export const SearchCon = styled.div`
  padding: 15px;
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
`

export const Search = styled.div`
  border: 1px solid ${props => (!props.dark ? 'lightgrey' : 'grey')};
  display: flex;
  align-items: center;
  padding: 0px;
  border-radius: 3px;
  max-width: 500px;

  @media (min-width: 578px) and (max-width: 768px) {
    max-width: 350px;
  }
`
export const SearchInput = styled.input`
  width: 85%;
  background-color: ${props => (!props.dark ? 'white' : '#181818')};
  border: 0px;
  height: 100%;
  margin: 0px;
  padding: 10px;
  outline: none;
  border-radius: 3px;
  color: ${props => (!props.dark ? 'black' : 'White')};
`
export const ButtonSearch = styled.button`
  border: 1px;
  background-color: transparent;
`
export const SearchIcon = styled.div`
  padding: 10px;
  background-color: ${props => (!props.dark ? '#f1f1f1' : '#424242')};
  color: grey;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid lightgrey;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
`
export const ThumbnailCon = styled.ul`
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
  padding: 5px;
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  // justify-content: center;
  //   @media (min-width: 768px) {
  //     width: 75vw;
  //   }
`
export const LoaderCon = styled.div`
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 97vw;
  @media (min-width: 768px) {
    width: 78vw;
    height: 44vh;
  }
`
export const NoResultCon = styled.div`
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const NoResultImg = styled.img`
  width: 170px;
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
