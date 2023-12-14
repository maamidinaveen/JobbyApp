import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const {history} = props

  const onSubmit = () => {
    history.replace('/jobs')
  }
  return (
    <div>
      <Header />
      <div className="mobile-home-container">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-description">
          Millions of people are searching for jobs, salary information, company
          reviews.Find the job that fits your abilities and potential.
        </p>
        <button type="button" onClick={onSubmit} className="find-jobs-button">
          Find Jobs
        </button>
      </div>
      <div className="desktop-home-container">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-description">
          Millions of people searching for jobs, salary information, company
          reviews.Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" onClick={onSubmit} className="find-jobs-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Home
