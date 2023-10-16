import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import GamingThumbnailItem from '../GamingThumbnailItem'
import {
  GamingCont,
  GamingHeadCon,
  GamingIcon,
  GamingHead,
  GamingItems,
  LoaderCon,
  NoResultCon,
  NoResultImg,
  NoResultHead,
  NoResultDes,
  RetryBtn,
} from './StyledComponent'

const RenderStatus = {
  initial: 'Initial',
  success: 'Success',
  loading: 'Loading',
  failure: 'Failure',
  noResult: 'NoResult',
}

class MainGaming extends Component {
  state = {updatedData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({renderStat: RenderStatus.loading})
    const JwtToken = Cookies.get('jwt_token')
    const URL = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(URL, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(e => ({
        id: e.id,
        thumbnailUrl: e.thumbnail_url,
        title: e.title,
        viewCount: e.view_count,
      }))
      console.log(updatedData)

      this.setState({updatedData})
      if (updatedData.length !== 0) {
        this.setState({updatedData, renderStat: RenderStatus.success})
      }
    }

    if (response.ok === false) {
      this.setState({renderStat: RenderStatus.failure})
    }
  }

  renderSuccess = dark => {
    const {updatedData} = this.state
    return (
      <>
        <GamingHeadCon dark={dark} data-testid="banner">
          <GamingIcon dark={dark}>
            <SiYoutubegaming />
          </GamingIcon>
          <GamingHead dark={dark}>Gaming</GamingHead>
        </GamingHeadCon>
        <GamingItems dark={dark}>
          {updatedData.map(e => (
            <GamingThumbnailItem dark={dark} data={e} key={e.id} />
          ))}
        </GamingItems>
      </>
    )
  }

  renderFailure = dark => (
    <NoResultCon dark={dark}>
      <NoResultImg
        src={
          !dark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <NoResultHead dark={dark}>Oops! Something Went Wrong</NoResultHead>
      <NoResultDes>
        We are having some trouble to complete your request. Please try again.
      </NoResultDes>
      <RetryBtn dark={dark} onClick={() => this.getData()}>
        Retry
      </RetryBtn>
    </NoResultCon>
  )

  renderLoading = dark => {
    const Hello = '12'
    return (
      <LoaderCon dark={dark} data-testid="loader">
        <Loader
          type="Circles"
          color={dark ? 'white' : 'black'}
          height="50"
          width="50"
        />
      </LoaderCon>
    )
  }

  renderInfo = dark => {
    const {renderStat} = this.state
    switch (renderStat) {
      case RenderStatus.success:
        return this.renderSuccess(dark)

      case RenderStatus.loading:
        return this.renderLoading(dark)

      case RenderStatus.failure:
        return this.renderFailure(dark)

      default:
        return null
    }
  }

  render() {
    const {dark} = this.props
    // console.log(dark)

    const {updatedData} = this.state
    return <GamingCont>{this.renderInfo(dark)}</GamingCont>
  }
}

export default MainGaming
