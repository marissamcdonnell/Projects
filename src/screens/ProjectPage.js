/* eslint-disable */
import React, { useState, useEffect } from 'react'
import PortfolioLg from '../components/PortfolioLg'
import anime from 'animejs'
import { withAppContext } from '../components/utils/AppContext'
import PortfolioSm from '../components/PortfolioSm'
import data from '../data/projects.json'

import squish from '../images/SquishFruitscreen.png'
import nba from '../images/nba50screen.png'
import sports from '../images/sportsFilms.png'
import wic from '../images/wic.png'

function ProjectPage() {
  const [img, setImage] = useState(squish)
  const [title, setTitle] = useState(data.projects[0].title)
  const [link, setLink] = useState(data.projects[0].repo)
  const [linkText, setLinkText] = useState('Repo')
  const [dataSet, setDataSet] = useState(null)
  const [animate, setAnimate] = useState(false)
  const images = [
    { id: 'squish', img: squish },
    { id: 'nba', img: nba },
    { id: 'sports', img: sports },
    { id: 'wic', img: wic }
  ]

  useEffect(() => {
    if (dataSet) {
      Object.keys(dataSet).map(key => {
        if (key === 'link') {
          setLinkText('link')
        }
        if (key === 'repo') {
          setLinkText('repo')
        }
      })
      const image = images.filter(img => img.id === dataSet.id)
      setImage(image[0].img)
      setTitle(dataSet.title)
      setLink(dataSet[linkText])
      console.log('project', linkText, link)
      setAnimate(true)
    }
    ;() => {}
  }, [dataSet])

  useEffect(() => {
    if (animate) {
      anime({
        targets: '.project-lg-container',
        scale: {
          value: 1.1,
          easing: 'easeInOutSine'
        },
        duration: 250,
        direction: 'alternate',
        loop: 1
      })
      setAnimate(false)
    }
  }, [animate])

  return (
    <div className="project footer-bottom">
      <h2 className="title">Projects</h2>
      <div className="projectContainer">
        <PortfolioLg img={img} title={title} link={link} linkText={linkText} />
        <div className="flex">
          {data.projects.map(data => (
            <button onClick={() => setDataSet(data)} type="button">
              <PortfolioSm data={data} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withAppContext(ProjectPage)
