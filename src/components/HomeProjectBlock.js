import React from 'react'
import PropTypes from 'prop-types'

const HomeProjectBlock = ({featureName, projectImg, projectName}) => (
    <div className="project-container">
        <div className="text">
            <h5>{featureName}</h5>
            <h2>{projectName}</h2>
            <a className="button-lg">View Project</a>
        </div>
        <div className="box filter">
            <img src={projectImg} alt="project 1" />
        </div>
    </div>
)

HomeProjectBlock.propTypes = {
    projectImg: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
}

export default HomeProjectBlock