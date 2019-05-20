import React from 'react';
import PortfolioLg from '../components/PortfolioLg'
import anime from 'animejs'
import { withAppContext } from '../components/utils/AppContext'
import PortfolioSm from '../components/PortfolioSm';
import data from '../data/projects.json'

class ProjectPage extends React.Component {
    constructor() {
        super()
        this.state = {
            action: false,
            img: data.projects[0].img,
            title: data.projects[0].title,
        }
        this.handleClick = this.handleClick.bind(this)
        this.anime = this.anime.bind(this)
    }

    handleClick(img, title) {
        // const { action } = this.state
        // // if(action === false) {
        this.setState(() => ({
            // action: true,
            img: img,
            title: title,
        }), this.anime)
        // }
    }

    anime() {
        console.log('anime')
        anime({
          targets: '.project-lg-container',
        //   translateX: 500,
        });
      };

    render() {
        const {img, title} = this.state

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
                            <PortfolioSm
                                handleClick={() => this.handleClick(data.img, data.title)}
                                img={data.img}
                                title={data.title}
                                repo={data.repo}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}


export default withAppContext(ProjectPage)
