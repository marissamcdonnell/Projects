import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const HomeProjectBlock = ({
  featureName,
  projectImg,
  projectName,
  path,
  linkText,
  imgLink
}) => (
  <div className="project-container">
    <div className="text">
      <h5>{featureName}</h5>
      <h2>{projectName}</h2>
      <Link className="button-lg" to={path}>
        {linkText}
      </Link>
    </div>
    <a className="box filter" href={imgLink}>
      <img src={projectImg} alt={featureName} />
    </a>
  </div>
)

HomeProjectBlock.propTypes = {
  featureName: PropTypes.string.isRequired,
  projectImg: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  imgLink: PropTypes.string
}

export default HomeProjectBlock
