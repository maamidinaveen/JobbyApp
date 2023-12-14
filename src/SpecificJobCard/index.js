import {Component} from 'react'
import {AiFillStar, AiOutlineLink} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SimilarJob from '../SimilarJob'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SpecificJobCard extends Component {
  state = {
    jobData: {},
    similarJobs: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobData()
  }

  getJobData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        componyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        skills: data.job_details.skills.map(each => ({
          SkillImageUrl: each.image_url,
          name: each.name,
        })),
        lifeAtCompany: {
          description: data.job_details.life_at_company.description,
          lifeImageUrl: data.job_details.life_at_company.image_url,
        },
        location: data.job_details.location,
        salaryPackage: data.job_details.package_per_annum,
        rating: data.job_details.rating,
        title: data.job_details.title,
      }

      const similar = data.similar_jobs.map(each => ({
        id: each.id,
        title: each.title,
        companyLogoUrl: each.company_logo_url,
        companyWebSiteUrl: each.company_website_url,
        employmentType: each.employment_type,
        jobDescription: each.job_description,
        location: each.location,
        rating: each.rating,
      }))

      this.setState({
        jobData: updatedData,
        apiStatus: apiStatusConstants.success,
        similarJobs: similar,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="retry-button" type="button">
        Retry
      </button>
    </div>
  )

  renderJobView = () => {
    const {jobData} = this.state
    const {
      componyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      skills,
      lifeAtCompany,
      location,
      salaryPackage,
      rating,
      title,
    } = jobData

    return (
      <div className="job-card-item">
        <div className="about-container">
          <img
            src={componyLogoUrl}
            alt="job details company logo"
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
            <p className="salary">{salaryPackage}</p>
          </div>
        </div>
        <hr className="line" />
        <div className="desc">
          <h1 className="heading">Description</h1>
          <a href={companyWebsiteUrl}>
            Visit
            <AiOutlineLink />
          </a>
        </div>
        <p className="description">{jobDescription}</p>
        <div className="skills-container">
          <h1 className="heading">Skills</h1>
          <ul className="skills">
            {skills.map(each => {
              const {SkillImageUrl, name} = each
              return (
                <li className="container">
                  <img src={SkillImageUrl} alt={name} className="skill-image" />
                  <p className="name">{name}</p>
                </li>
              )
            })}
          </ul>
          <div className="last-container">
            <div>
              <h1 className="heading">Life at Company</h1>
              <p className="description">{lifeAtCompany.description}</p>
            </div>
            <img
              src={lifeAtCompany.lifeImageUrl}
              alt="life at company"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }

  renderResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobView()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    const {similarJobs} = this.state
    return (
      <>
        <Header />
        {this.renderResults()}
        <h1 className="heading">Similar Jobs</h1>
        <ul className="similar-container">
          {similarJobs.map(each => (
            <SimilarJob job={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }
}

export default SpecificJobCard
