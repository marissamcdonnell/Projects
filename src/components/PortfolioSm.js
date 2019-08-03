import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import squish from '../images/SquishFruitscreen.png'
import nba from '../images/nba50screen.png'
import sports from '../images/sportsFilms.png'
import wic from '../images/wic.png'

function PortfolioSm({ data }) {
  const [text, setText] = useState('')

  const images = [
    { id: 'squish', img: squish },
    { id: 'nba', img: nba },
    { id: 'sports', img: sports },
    { id: 'wic', img: wic }
  ]

  const handleImage = () => {
    const image = images.filter(img => img.id === data.id)
    return image[0].img
  }

  useEffect(() => {
    Object.keys(data).map(key => {
      if (key === 'link') {
        setText('link')
      }
      if (key === 'repo') {
        setText('repo')
      }
    })
  }, [data])

  return (
    <div className="eachProject">
      <img src={handleImage()} alt={data.title} />
      <p>{data.title}</p>
      <a className="button-lg" href={data[text]}>
        Go to {text}
      </a>
    </div>
  )
}

PortfolioSm.propTypes = {
  data: PropTypes.object.isRequired
}

export default PortfolioSm
