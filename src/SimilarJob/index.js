import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const JobCard = props => {
  const {job} = props
  const {
    companyLogoUrl,
    jobDescription,
    location,
    rating,
    title,
    employmentType,
  } = job

  return (
    <li className="job-card-item">
      <div className="about-container">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
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
      <div className="desc">
        <h1 className="heading">Description</h1>
        <p className="description">{jobDescription}</p>
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
      </div>
    </li>
  )
}
export default JobCard
