import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import './index.css'

const profileConditions = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_Progress',
  failure: 'FAILURE',
}

class Profile extends Component {
  state = {profileData: {}, apiStatus: profileConditions.initial}

  componentDidMount() {
    this.getProfile()
  }

  getProfile = async () => {
    this.setState({apiStatus: profileConditions.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const updatedData = {
        profileImageUrl:
          'https://assets.ccbp.in/frontend/react-js/male-avatar-img.png',
        name: 'Rahul Attuluri',
        shortBio: 'Lead Software Developer and AI-ML expert',
      }
      this.setState({
        profileData: updatedData,
        apiStatus: profileConditions.success,
      })
    } else {
      this.setState({apiStatus: profileConditions.failure})
    }
  }

  renderProfile = () => {
    const {profileData} = this.state
    const {profileImageUrl, name, shortBio} = profileData
    return (
      <div className="profile-container">
        <img src={profileImageUrl} alt="profile" className="profile-image" />
        <h1 className="name">{name}</h1>
        <p className="description">{shortBio}</p>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <div className="failure-container">
      <button className="retry-button" type="button">
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case profileConditions.success:
        return this.renderProfile()
      case profileConditions.inProgress:
        return this.renderLoader()
      case profileConditions.failure:
        return this.renderFailure()
      default:
        return null
    }
  }
}

export default Profile
