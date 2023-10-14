import styled from 'styled-components'

export const VideoPlayerCon = styled.div`
  font-family: 'Roboto';
  height: 95vh;
  width: 100vw;
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#0f0f0f')};
  padding-top: 15px;
  @media (min-width: 768px) {
  }
  @media (min-width: 568px) {
    width: 98vw;
  }
  @media (min-width: 768px) {
    width: 78vw;
    height: 100vh;
    padding: 15px;
  }
  @media (min-width: 902px) {
    width: 79vw;
  }
`

export const VideoThumb = styled.h1`
  font-size: 19px;
  font-weight: 500;
  color: ${props => (!props.dark ? ' #313131' : 'white')};
`
export const VideoDetailsCon = styled.div`
  padding: 10px;
`
export const Player = styled.div`
  padding: 0px;
  width: 100%;
  height: 35vh;
  border-radius: 10px;
  @media (min-width: 568px) {
    height: 40vh;
  }
  @media (min-width: 768px) {
    height: 50vh;
  }
  @media (min-width: 902px) {
    height: 60vh;
  }
`
export const ViewsLikesCon = styled.div`
  padding: 0px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const ViewsDes = styled.p`
  font-size: 14px;
  color: ${props => (!props.dark ? '#64748b' : '#cbd5e1')};
`
export const LikesDislikesCon = styled.div`
  padding: 0px;
  display: flex;
  gap: 15px;
`
export const LikeCon = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${props => (!props.dark ? '#64748b' : '#cbd5e1')};
  font-size: 17px;
`

export const DislikeCon = styled.button`
  background-color: transparent;
  border: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${props => (!props.dark ? '#64748b' : '#cbd5e1')};
  font-size: 17px;
`
export const SaveCon = styled.button`
  background-color: transparent;
  border: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${props => (!props.dark ? '#64748b' : '#cbd5e1')};
  font-size: 17px;
`

export const Like = styled.p`
  font-weight: 500;
  font-size: 15px;
`
export const Hr = styled.hr`
  color: grey;
`
export const ProfileCon = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Profile = styled.img`
  border-radius: 50%;
  width: 55px;
  height: 55px;
`
export const TitleCon = styled.div`
  padding: 0px;
`

export const ProfileName = styled.p`
  color: ${props => (!props.dark ? '#313131 ' : '#cbd5e1')};
  font-size: 15px;
`
export const Subscri = styled.p`
  color: #64748b;
  font-size: 15px;
`
export const VideoDes = styled.p`
  color: ${props => (!props.dark ? '#475569  ' : '#cbd5e1')};
`
export const LoaderCon = styled.div`
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94vh;
  width: 98vw;
  @media (min-width: 768px) {
    width: 74vw;
    height: 90vh;
  }
  @media (min-width: 900px) {
    width: 76vw;
    height: 90vh;
  }
`
export const NoResultCon = styled.div`
  background-color: ${props => (!props.dark ? '  #f9f9f9' : '#181818')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94vh;
  width: 95vw;
  @media (min-width: 768px) {
    width: 79vw;
    height: 90vh;
  }
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
