import React from 'react'
import PropTypes from 'prop-types'

const PortfolioSm = ({handleClick, img, title, repo}) => (
    <div className="eachProject">
        <button onClick={handleClick} type="button">
            <img src={img} alt={title} />
        </button>
        <p>{title}</p>
        <a className="button-lg" href={repo}>Go to Repo</a>
    </div>
)

PortfolioSm.propTypes = {
    handleClick: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
}

export default PortfolioSm
