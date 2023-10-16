import styled from 'styled-components'

export const GamingThumbCon = styled.li`
  padding: 0px;
`
export const GamingImg = styled.img`
  border-radius: 5px;
  width: 170px;
  height: 220px;

  @media (min-width: 568px) {
    width: 170px;
    height: 210px;
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 280px;
  }
  @media (min-width: 768px) and (max-width: 835px) {
    width: 160px;
    height: 220px;
  }
  @media (min-width: 1008px) {
    width: 215px;
    height: 310px;
  }
`
export const GamingDesCon = styled.div`
  padding: 0px;
`
export const GamingTitle = styled.p`
  font-size: 15px;
  color: ${props => (!props.dark ? '#475569' : 'white')};
`
export const GamingViews = styled.p`
  font-size: 12px;
  color: ${props => (!props.dark ? 'grey' : '#64748b')};
`
