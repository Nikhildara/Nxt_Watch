import styled from 'styled-components'

export const ThumbnailItemCon = styled.li`
  width: 100%;

  @media (min-width: 578px) {
    // max-width: 280px;
    display: flex;
  }

  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1008px) {
    // max-width: 360px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 5px;
  @media (min-width: 578px) {
    max-width: 280px;
  }

  @media (min-width: 768px) {
    max-width: 300px;
  }
  @media (min-width: 1008px) {
    max-width: 360px;
  }
`
export const ThumbnailDetailsCon = styled.div`
  display: flex;
  max-width: 500px;
`

export const ThumbnailDetails = styled.div`
  padding-right: 0px;
`
export const ProfileCon = styled.div`
  padding: 0px;
`
export const Profile = styled.img`
  width: 33px;
  margin: 15px;
  margin-top: 20px;

  @media (min-width: 578px) {
    width: 30px;
    margin-top: 15px;
  }
`
export const ThumbHead = styled.p`
  color: ${props => (props.dark ? 'white' : 'black')};
  font-size: 18px;
  margin-bottom: 0px;
  text-decoration: none;
  @media (min-width: 578px) {
    font-size: 15px;
  }
`
export const ThumbDetails = styled.p`
  color: #64748b;
  @media (min-width: 578px) {
    font-size: 10px;
  }
`
