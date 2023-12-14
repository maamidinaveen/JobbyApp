import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'

import {FiLogOut} from 'react-icons/fi'
import {FaSuitcase} from 'react-icons/fa'

import './index.css'

const Header = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="total-container">
      <nav className="mobile-header-container">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
                className="logo"
              />
            </Link>
          </li>

          <div className="options-container">
            <li>
              <Link to="/" className="nav-link">
                <AiFillHome className="icons" />
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="nav-link">
                <FaSuitcase className="icons" />
              </Link>
            </li>
            <FiLogOut className="icons" onClick={onClickLogout} />
          </div>
        </ul>
      </nav>
      <nav className="desktop-header-container">
        <Link to="/" className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
        </Link>
        <div className="options">
          <Link to="/" className="nav-link">
            <p className="option-value">Home</p>
          </Link>
          <Link to="/jobs" className="nav-link">
            <p className="option-value">Jobs</p>
          </Link>
        </div>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default withRouter(Header)
