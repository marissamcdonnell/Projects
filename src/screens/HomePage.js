import React from 'react'
import {
  DiJavascript1,
  DiReact,
  DiWordpress,
  DiGit,
  DiPhp,
  DiHtml5,
  DiCss3,
  DiSass,
  DiNpm
} from 'react-icons/di'
import { Tooltip } from 'react-tippy'

import ProjectBlock from '../components/HomeProjectBlock'
import featured from '../images/SquishFruitscreen.png'
import projectImg1 from '../images/githubPortfolio.png'

const HomePage = () => (
  <div className="home footer-bottom">
    {/* TODO: add imgLink to images on home page. */}
    <ProjectBlock
      featureName="Featured Project"
      projectImg={featured}
      projectName="Squish Fruits"
      path="/portfolio"
      linkText="To Project"
    />
    <div className="block">
      <h2>What I bring to the table</h2>
      <p>
        I currently work at FanSided, which is where my passion for web
        development began. One aspect of this career path that I truly enjoy is
        problem solving. There are always multiple ways to solve problems but to
        take the time to explore and learn multiple ways, builds a solid
        foundation for solving more problems.
      </p>
    </div>
    <ProjectBlock
      featureName="Blog"
      projectImg={projectImg1}
      projectName="How I Started My Journey"
      path="/blog"
      linkText="To Blog"
    />
    <div className="block2">
      <h2>Languages in a nutshell</h2>
      <div className="icons">
        <Tooltip
          title="JavaScript"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiJavascript1 />
        </Tooltip>
        <Tooltip
          title="React"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiReact />
        </Tooltip>
        <Tooltip
          title="npm"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiNpm />
        </Tooltip>
        <Tooltip
          title="php"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiPhp />
        </Tooltip>
        <Tooltip
          title="Git"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiGit />
        </Tooltip>
        <Tooltip
          title="html5"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiHtml5 />
        </Tooltip>
        <Tooltip
          title="css3"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiCss3 />
        </Tooltip>
        <Tooltip
          title="Sass"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiSass />
        </Tooltip>
        <Tooltip
          title="Wordpress"
          position="top"
          animation="perspective"
          size="big"
          arrow={true}
        >
          <DiWordpress />
        </Tooltip>
      </div>
    </div>
  </div>
)

export default HomePage
