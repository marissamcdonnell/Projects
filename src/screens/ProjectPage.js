/* eslint-disable */
import React, {useState, useEffect} from 'react';
import PortfolioLg from '../components/PortfolioLg'
import anime from 'animejs'
import { withAppContext } from '../components/utils/AppContext'
import PortfolioSm from '../components/PortfolioSm';
import data from '../data/projects.json'

import squish from '../images/SquishFruitscreen.png'
import nba from '../images/nba50screen.png'
import sports from '../images/sportsFilms.png'

function ProjectPage() {
    const [img, setImage] = useState(squish)
    const [title, setTitle] = useState(data.projects[0].title)
    const [dataSet, setDataSet] = useState(null)
    const images = [
        {id: 'squish', img: squish,},
        {id: 'nba', img: nba,},
        {id: 'sports', img: sports,},
    ]

    useEffect(() => {
        if(dataSet) {
            const image = images.filter(img => img.id === dataSet.id)
            console.log(image)
            setImage(image[0].img)
            setTitle(dataSet.title)
        }
    }, [dataSet])

    const anime = () => {
        console.log('anime')
        anime({
          targets: '.project-lg-container',
        //   translateX: 500,
        });
      };

    return (
        <div className="project footer-bottom">
            <h2 className="title">Projects</h2>
            <div className="projectContainer">
                <PortfolioLg 
                    img={img}
                    title={title}
                />
                <div className="flex">
                    {data.projects.map(data => 
                        <button onClick={() => setDataSet(data)} type="button">
                            <PortfolioSm data={data} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}


export default withAppContext(ProjectPage)
