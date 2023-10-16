import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProjectedRoute = props => {
  const JWTToken = Cookies.get('jwt_token')
  if (Cookies.get('jwt_token')) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default ProjectedRoute
