import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import data from '../data/projects.json'

const PortfolioLg = ({img, title}) => {
    const [imageSize, setImageSize] = useState('normal')
    const [view, setView] = useState(false)

    useEffect(() => {
        if(view) {
            setImageSize('large')
            setView(false)
        }
    }, [view])
    

    return (
        <div className="project-lg-container">
            <div className="project-description">
                <h3>{title}</h3>
                <p>{title && data.projects.find(project => project.title === title).description}</p>
                <a className="button-lg" href={title && data.projects.find(project => project.title === title).repo}>Go to Repo</a>
            </div>
            <input src={img} alt={title} className={imageSize} type="image" />
        </div>
    )
}

PortfolioLg.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default PortfolioLg
