import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from './AnimatedLetters';
import payment1 from '../assets/payment1.gif';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

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
          <img className="project-img" src={payment1} alt="screenshot of Splitsy project"/>
        </div>
        <div className="project-info">
          <a className="project-title" href="https://github.com/rpp33-boc-arctic/splitsy" rel="noopener noreferrer" target="_blank">Splitsy</a>
          <div className="project-link-block">
            <a
              className="project-website"
              href="https://github.com/rpp33-boc-arctic/splitsy"
              aria-label="link to github repo">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
            <a
              className="project-website"
              href="https://github.com/rpp33-boc-arctic/splitsy#main-features"
              aria-label="link to live page">
              <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </a>
          </div>
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
      <Loader type="pacman" />
    </>
  )
}

export default Project;