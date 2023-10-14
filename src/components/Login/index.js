import {Component} from 'react'
import Cookies from 'js-cookie'
import WatchContext from '../../Context/WatchContext'
// import {Link} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    show: false,
    showErr: false,
    errMsg: '',
  }

  setToken = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3})
    history.replace('/')
  }

  submitCredentials = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({showErr: false, username: '', password: ''})
      const jwtToken = data.jwt_token
      this.setToken(jwtToken)
    }
    if (response.status === 400) {
      const data = await response.json()
      console.log(data)
      this.setState({
        showErr: true,
        errMsg: data.error_msg,
        username: '',
        password: '',
      })
    }
  }

  //   onBlurUsername = () => {
  //     const {username} = this.state
  //     const res = username === ''
  //     this.setState({errUser: res})
  //   }

  //   onBlurPassword = () => {
  //     const {username} = this.state
  //     const res = username === ''
  //     this.setState({errPass: res})
  //   }

  render() {
    const {username, password, show, showErr, errMsg} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <div className={!dark ? 'login-page' : 'login-page-dark'}>
              <div className={!dark ? 'login-card' : 'login-card-dark'}>
                <img
                  src={
                    !dark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website-logo"
                  className="login-logo"
                />
                <form className="form" onSubmit={this.submitCredentials}>
                  <div className="input-con">
                    <label
                      className={!dark ? 'label' : 'label-dark'}
                      htmlFor="user"
                    >
                      USERNAME
                    </label>
                    <input
                      type="text"
                      id="user"
                      value={username}
                      placeholder="Username"
                      className={!dark ? 'input' : 'input-dark'}
                      onChange={e => this.setState({username: e.target.value})}
                      onBlur={this.onBlurUsername}
                    />
                    {/* {errUser && <p className="err-msg">*Required</p>} */}
                  </div>
                  <div className="input-con">
                    <label
                      className={!dark ? 'label' : 'label-dark'}
                      htmlFor="password"
                    >
                      PASSWORD
                    </label>
                    <input
                      type={show ? 'text' : 'password'}
                      id="password"
                      value={password}
                      placeholder="Password"
                      className={!dark ? 'input' : 'input-dark'}
                      onChange={e => this.setState({password: e.target.value})}
                      onBlur={this.onBlurPassword}
                    />
                    {/* {errPass && <p className="err-msg">*Required</p>} */}
                  </div>
                  <div className="show-pass-con">
                    <input
                      type="checkbox"
                      id="showPass"
                      onChange={e => {
                        this.setState({show: e.target.checked})
                      }}
                    />
                    <label
                      htmlFor="showPass"
                      className={
                        !dark ? 'show-pass-label' : 'show-pass-label-dark'
                      }
                    >
                      Show Password
                    </label>
                  </div>
                  <button className="login-btn" type="submit">
                    Login
                  </button>
                </form>
                {showErr && <p className="err-msg">*{errMsg}</p>}
              </div>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Login
