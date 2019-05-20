import React from 'react'
import PropTypes from 'prop-types'
import data from '../data/projects.json'

const PortfolioLg = ({img, title}) => (
    <div className="project-lg-container">
        <div className="project-description">
            <h3>{title}</h3>
            <p>{title && data.projects.find(project => project.title === title).description}</p>
            <a className="button-lg" href={title && data.projects.find(project => project.title === title).repo}>Go to Repo</a>
        </div>
        <img src={img} alt={title} />
    </div>
)

PortfolioLg.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default PortfolioLg
