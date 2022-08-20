import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from './AnimatedLetters';

const Project = () => {
  const [letterClass] = useState('text-animate');

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1 className="about-h1">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Portfolio".split("")}
              idx={15}
            />
          </h1>
          <img className="project-img" src="" alt="screenshot of Splitsy project"/>
          <div className="project-info">
            <div className="project-link-block row">
              <a className="project-website" href="https://github.com/rpp33-boc-arctic/splitsy" aria-label="link to github repo">
                <i className="fa fab fa-github link"></i>
              </a>
              <a className="project-website" href="https://github.com/rpp33-boc-arctic/splitsy#main-features" aria-label="link to live page">
                <i className="fa fas fa-external-link-alt link"></i>
              </a>
            </div>
            <a className="project-title" href="https://github.com/rpp33-boc-arctic/splitsy" rel="noopener noreferrer" target="_blank">Splitsy</a>
            <div className="project-desc">
              A full stack web application that allows users to conveniently split restaurant bills! Create or join an order easily
              and share with friends and family, share the bill and tips with different methods, then submit the order to the restaurant.
            </div>
            <div className="project-tech-block">
              <span className="project-tech">React</span>
              <span className="project-tech">MaterialUI</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">MongoDB</span>
              <span className="project-tech">Paypal SDK</span>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project;