import {Component} from 'react'
import ReactPlayer from 'react-player/youtube'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import WatchContext from '../../Context/WatchContext'
import {
  VideoPlayerCon,
  VideoThumb,
  Player,
  VideoDetailsCon,
  ViewsLikesCon,
  ViewsDes,
  LikesDislikesCon,
  LikeCon,
  DislikeCon,
  SaveCon,
  Like,
  Hr,
  ProfileCon,
  Profile,
  TitleCon,
  ProfileName,
  Subscri,
  VideoDes,
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

class MainPlayer extends Component {
  state = {Data: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({renderStat: RenderStatus.loading})
    const {id} = this.props
    // console.log(id)
    const JwtToken = Cookies.get('jwt_token')
    const URL = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(URL, options)

    if (response.ok === true) {
      const data = await response.json()
      // console.log(data)

      const updatedData = {
        id: data.video_details.id,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        SubscribeCount: data.video_details.channel.subscriber_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
      }
      // console.log(updatedData)
      this.setState({Data: updatedData, renderStat: RenderStatus.success})
    }
    if (response.status === 404) {
      this.setState({renderStat: RenderStatus.failure})
    }
  }

  renderSuccess = (
    dark,
    savedVideos,
    addVideo,
    removeVideo,
    likedDisliked,
    removeLikeDis,
    addLikeDis,
  ) => {
    const {Data} = this.state
    // console.log(Data)
    const {
      name,
      profileImageUrl,
      SubscribeCount,
      publishedAt,
      description,
      thumbnailUrl,
      videoUrl,
      title,
      viewCount,
      id,
    } = Data

    const isSaved = savedVideos.some(e => e.id === id)
    // console.log(isSaved)

    const addORremove = () => {
      if (!isSaved) {
        addVideo(Data)
      } else {
        removeVideo(id)
      }
    }

    // const isLikedORDis = likedDisliked.some(e => e.id === id)
    const IsLiked = likedDisliked.some(e => e.likeId === `Like${id}`)
    const IsDisliked = likedDisliked.some(e => e.dislikeId === `Dislike${id}`)
    console.log(likedDisliked)

    const liked = () => {
      console.log('Clicked')

      if (!IsLiked) {
        addLikeDis({likeId: `Like${id}`})
      } else {
        removeLikeDis(`Like${id}`)
      }
    }

    const Disliked = () => {
      if (!IsDisliked) {
        addLikeDis({dislikeId: `Dislike${id}`})
      } else {
        removeLikeDis(`Dislike${id}`)
      }
    }

    const parsedDate = new Date(publishedAt)
    // console.log(typeof parsedDate, parsedDate)
    let publishedBef
    if (!Number.isNaN(parsedDate.getTime())) {
      const published = formatDistanceToNow(
        new Date(
          parsedDate.getFullYear(),
          parsedDate.getMonth(),
          parsedDate.getDate(),
        ),
        {addSuffix: true},
      )

      const indexOfSpace = published.indexOf(' ')
      publishedBef = published.slice(indexOfSpace + 1)
    }
    return (
      <>
        <Player>
          <ReactPlayer
            url={videoUrl}
            height="100%"
            width="100%"
            controls
            thumbnailurl={thumbnailUrl}
          />
        </Player>
        <VideoDetailsCon>
          <VideoThumb dark={dark}>{title}</VideoThumb>
          <ViewsLikesCon>
            <ViewsDes dark={dark}>
              {viewCount} views &nbsp; &#x2022; &nbsp; {publishedBef}
            </ViewsDes>
            <LikesDislikesCon>
              <SaveCon
                dark={dark}
                style={IsLiked ? {color: ' #3b82f6'} : null}
                onClick={liked}
              >
                <BiLike />
                <Like>Like</Like>
              </SaveCon>
              <SaveCon
                dark={dark}
                style={IsDisliked ? {color: ' #3b82f6'} : null}
                onClick={Disliked}
              >
                <BiDislike />
                <Like>Dislike</Like>
              </SaveCon>
              <SaveCon
                dark={dark}
                style={isSaved ? {color: ' #3b82f6'} : null}
                onClick={addORremove}
              >
                <BiListPlus />
                <Like>Save</Like>
              </SaveCon>
            </LikesDislikesCon>
          </ViewsLikesCon>
          <Hr dark={dark} />
          <ProfileCon>
            <Profile src={profileImageUrl} alt="Profile" />
            <TitleCon>
              <ProfileName dark={dark}>{name}</ProfileName>
              <Subscri dark={dark}>{SubscribeCount} subscribers</Subscri>
            </TitleCon>
          </ProfileCon>
          <VideoDes dark={dark}>{description}</VideoDes>
        </VideoDetailsCon>
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
        alt="Failure Image"
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

  renderInfo = (
    dark,
    savedVideos,
    addVideo,
    removeVideo,
    likedDisliked,
    removeLikeDis,
    addLikeDis,
  ) => {
    const {renderStat} = this.state
    switch (renderStat) {
      case RenderStatus.success:
        return this.renderSuccess(
          dark,
          savedVideos,
          addVideo,
          removeVideo,
          likedDisliked,
          removeLikeDis,
          addLikeDis,
        )

      case RenderStatus.loading:
        return this.renderLoading(dark)

      case RenderStatus.failure:
        return this.renderFailure(dark)

      default:
        return null
    }
  }

  render() {
    const {Data} = this.state

    return (
      <WatchContext.Consumer>
        {value => {
          const {
            dark,
            savedVideos,
            addVideo,
            removeVideo,
            likedDisliked,
            removeLikeDis,
            addLikeDis,
          } = value
          const argu = [
            dark,
            savedVideos,
            addVideo,
            removeVideo,
            likedDisliked,
            removeLikeDis,
            addLikeDis,
          ]

          return (
            <VideoPlayerCon dark={dark}>
              {this.renderInfo(...argu)}
            </VideoPlayerCon>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default MainPlayer
