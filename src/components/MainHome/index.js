import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import WatchContext from '../../Context/WatchContext'
import {
  PremiumCard,
  Logo,
  CardDes,
  GETBtn,
  CloseIconCon,
  ButtonSearch,
  ButtonClose,
  HomeContentCon,
  SearchCon,
  Search,
  SearchInput,
  SearchIcon,
  ThumbnailCon,
  MainHomeCon,
  LoaderCon,
  NoResultCon,
  NoResultImg,
  NoResultHead,
  NoResultDes,
  RetryBtn,
} from './StyledComponent'
import ThumbnailItem from '../ThumbnailItem'

const RenderStatus = {
  initial: 'Initial',
  success: 'Success',
  loading: 'Loading',
  failure: 'Failure',
  noResult: 'NoResult',
}

class MainHome extends Component {
  state = {
    searchInput: '',
    showAdd: true,
    updatedData: [],
    renderStat: RenderStatus.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({renderStat: RenderStatus.loading})
    const JwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const URL = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: e.channel,
        publishedAt: e.published_at,
        thumbnailUrl: e.thumbnail_url,
        title: e.title,
        viewCount: e.view_count,
      }))
      // console.log(updatedData)

      this.setState({updatedData})
      if (updatedData.length !== 0) {
        this.setState({updatedData, renderStat: RenderStatus.success})
      } else {
        this.setState({updatedData, renderStat: RenderStatus.noResult})
      }
    }

    if (response.ok === false) {
      this.setState({renderStat: RenderStatus.failure})
    }
  }

  setInputSearch = e => {
    this.setState({searchInput: e.target.value})
    // console.log(e.target.value)
  }

  searchBtn = () => {
    this.getData()
  }

  renderSuccess = dark => {
    const {updatedData} = this.state
    return (
      <ThumbnailCon dark={dark}>
        {updatedData.map(e => (
          <ThumbnailItem data={e} key={e.id} />
        ))}
      </ThumbnailCon>
    )
  }

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

  renderNoResult = dark => (
    <NoResultCon dark={dark}>
      <NoResultImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultHead dark={dark}>No Search results found</NoResultHead>
      <NoResultDes dark={dark}>
        Try different key words or remove search filter
      </NoResultDes>
      <RetryBtn dark={dark} onClick={() => this.getData()}>
        Retry
      </RetryBtn>
    </NoResultCon>
  )

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

  renderInfo = dark => {
    const {renderStat} = this.state
    switch (renderStat) {
      case RenderStatus.success:
        return this.renderSuccess(dark)

      case RenderStatus.loading:
        return this.renderLoading(dark)

      case RenderStatus.noResult:
        return this.renderNoResult(dark)

      case RenderStatus.failure:
        return this.renderFailure(dark)

      default:
        return null
    }
  }

  render() {
    const {showAdd} = this.state
    // console.log(searchInput)

    return (
      <WatchContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <MainHomeCon>
              <PremiumCard showAdd={showAdd} data-testid="banner">
                <CloseIconCon>
                  <ButtonClose
                    onClick={() => this.setState({showAdd: false})}
                    data-testid="close"
                  >
                    <AiOutlineClose />
                  </ButtonClose>
                </CloseIconCon>
                <div>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <CardDes>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </CardDes>
                </div>
                <GETBtn>GET IT NOW</GETBtn>
              </PremiumCard>
              <HomeContentCon>
                <SearchCon dark={dark}>
                  <Search dark={dark}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      dark={dark}
                      onChange={this.setInputSearch}
                    />
                    <SearchIcon dark={dark} data-testid="searchButton">
                      <ButtonSearch
                        onClick={this.searchBtn}
                        data-testid="searchButton"
                      >
                        <BsSearch />
                      </ButtonSearch>
                    </SearchIcon>
                  </Search>
                </SearchCon>
                {this.renderInfo(dark)}
              </HomeContentCon>
            </MainHomeCon>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default MainHome
