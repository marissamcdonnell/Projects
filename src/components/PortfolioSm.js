import React from 'react'
import PropTypes from 'prop-types'

import squish from '../images/SquishFruitscreen.png'
import nba from '../images/nba50screen.png'
import sports from '../images/sportsFilms.png'

function PortfolioSm({ data }) {
    const images = [
        {id: 'squish', img: squish,},
        {id: 'nba', img: nba,},
        {id: 'sports', img: sports,},
    ]

    const handleImage = () => {
        const image = images.filter(img => img.id === data.id)
        return image[0].img
    }

    return (
    <div className="eachProject">
        <img src={handleImage()} alt={data.title} />
        <p>{data.title}</p>
        <a className="button-lg" href={data.repo}>Go to Repo</a>
    </div>
)
    }

PortfolioSm.propTypes = {
    data: PropTypes.object.isRequired
}

export default PortfolioSm
