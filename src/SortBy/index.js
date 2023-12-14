import {BsSearch} from 'react-icons/bs'

import './index.css'

const SortBy = props => {
  const renderSalary = () => {
    const {salaryRangesList} = props
    return salaryRangesList.map(Range => {
      const {changeSalaryRange} = props
      const RangeId = `Range${Range.salaryRangeId}`
      const onClickRange = () => changeSalaryRange(Range.salaryRangeId)

      return (
        <li
          className="employ-item"
          key={Range.salaryRangeId}
          onClick={onClickRange}
        >
          <input type="checkbox" id={RangeId} className="box" />
          <label htmlFor={RangeId} className="label-name">
            {Range.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <>
      <hr />
      <h1 className="heading">Salary Range</h1>
      <ul className="employment-list">{renderSalary()}</ul>
    </>
  )

  const renderEmploymentList = () => {
    const {employmentTypesList} = props
    return employmentTypesList.map(employmentType => {
      const employmentId = `employment${employmentType.employmentTypeId}`
      const {changeEmploymentType} = props
      const onClickEmploymentType = () =>
        changeEmploymentType(employmentType.employmentTypeId)
      return (
        <li
          className="employ-item"
          key={employmentType.employmentTypeId}
          onClick={onClickEmploymentType}
        >
          <input type="checkbox" id={employmentId} className="box" />
          <label htmlFor={employmentId} className="label-name">
            {employmentType.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <>
      <hr />
      <h1 className="heading">Type of Employment</h1>
      <ul className="employment-list">{renderEmploymentList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          data-testid="searchButton"
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  return (
    <div className="filter-group-container">
      {renderSearchInput()}
      {renderEmploymentType()}
      {renderSalaryRange()}
    </div>
  )
}

export default SortBy
