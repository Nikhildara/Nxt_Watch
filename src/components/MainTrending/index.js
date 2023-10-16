import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import {
  TrendingHeadCon,
  TrendingCon,
  TrendIcon,
  TrendingHead,
  TrendingItems,
  LoaderCon,
  NoResultCon,
  NoResultImg,
  NoResultHead,
  NoResultDes,
  RetryBtn,
} from './StyledComponent'
import TrendThumbnailItem from '../TrendThumbnailItem'

const RenderStatus = {
  initial: 'Initial',
  success: 'Success',
  loading: 'Loading',
  failure: 'Failure',
  noResult: 'NoResult',
}

class MainTrending extends Component {
  state = {updatedData: [], renderStat: RenderStatus.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({renderStat: RenderStatus.loading})
    const JwtToken = Cookies.get('jwt_token')
    const URL = 'https://apis.ccbp.in/videos/trending'
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
        profileImageUrl: e.channel.profile_image_url,
        name: e.channel.name,
        publishedAt: e.published_at,
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
        <TrendingHeadCon dark={dark} data-testid="banner">
          <TrendIcon dark={dark}>
            <HiFire />
          </TrendIcon>
          <TrendingHead dark={dark}>Trending</TrendingHead>
        </TrendingHeadCon>
        <TrendingItems dark={dark}>
          {updatedData.map(e => (
            <TrendThumbnailItem data={e} key={e.id} />
          ))}
        </TrendingItems>
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
    const {updatedData} = this.state
    return <TrendingCon dark={dark}>{this.renderInfo(dark)}</TrendingCon>
  }
}
export default MainTrending
