import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="notfound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="not-image"
      />
      <h1 className="not-heading">Page Not Found</h1>
      <p className="not-description">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
