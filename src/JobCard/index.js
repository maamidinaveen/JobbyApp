import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="nav-link">
      <div className="job-card-item">
        <div className="about-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div className="about">
            <h1 className="company-heading">{title}</h1>
            <div className="star-container">
              <AiFillStar className="star" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="third-container">
            <div className="container">
              <GoLocation className="icon" />
              <p className="location">{location}</p>
            </div>
            <div className="container">
              <BsFillBriefcaseFill className="icon" />
              <p className="location">{employmentType}</p>
            </div>
          </div>
          <div className="salary-container">
            <p className="salary">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <div className="desc">
          <h1 className="heading">Description</h1>
          <p className="description">{jobDescription}</p>
        </div>
      </div>
    </Link>
  )
}
export default JobCard
