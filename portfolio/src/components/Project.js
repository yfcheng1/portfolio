import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from './AnimatedLetters';
import payment1 from '../assets/payment1.gif';
import SDC from '../assets/SDC.png';
import atelier from '../assets/atelier.gif';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  const [letterClass] = useState('text-animate');

  return (
    <>
      <div className="container-project-page">
        <div className="project-text-zone">
          <h1 className="about-h1">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Portfolio".split("")}
              idx={15}
            />
          </h1>
        </div>
        <div className="project-container">
          <img className="project-img" src={payment1} alt="screenshot of Splitsy project"/>
          <div className="project-info">
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
        <div className="project-container">
          {/* <img className="project-img" src={SDC} alt="screenshot of Orchid API project"/> */}
          <div className="project-info">
            <div className="project-link-block">
              <a
                className="project-website"
                href="https://github.com/rpp33-sdc-orchid/products"
                aria-label="link to github repo">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
              <a
                className="project-website"
                href="https://github.com/rpp33-sdc-orchid/products#api-end-points"
                aria-label="link to live page">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
              </a>
            </div>
            <a className="project-title" href="https://github.com/rpp33-sdc-orchid/products" rel="noopener noreferrer" target="_blank">Orchid API</a>
            <div className="project-desc">
              A backend microservice aims to provide RESTful API routes to serve an e-commerce website designed with service oriented architecture (SOA). Vertically and horizontally scaled to achieve 7000 RPS production traffic.
            </div>
            <div className="project-tech-block">
              <span className="project-tech">Node</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">PostgreSQL</span>
              <span className="project-tech">Redis</span>
              <span className="project-tech">NGINX</span>
            </div>
          </div>
          <img className="project-img" src={SDC} alt="screenshot of Orchid API project"/>
        </div>
        <div className="project-container">
          <img className="project-img" src={atelier} alt="screenshot of Orchid API project"/>
          <div className="project-info">
            <div className="project-link-block">
              <a
                className="project-website"
                href="https://github.com/rpp33-fec-yellow/project-atelier"
                aria-label="link to github repo">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
              <a
                className="project-website"
                href="https://github.com/rpp33-fec-yellow/project-atelier#atelier"
                aria-label="link to live page">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
              </a>
            </div>
            <a className="project-title" href="https://github.com/rpp33-fec-yellow/project-atelier" rel="noopener noreferrer" target="_blank">Atelier</a>
            <div className="project-desc">
              E-commerce UI application built with specific regard to remote collaboration using agile methodology.
              Explore product informations with description, price, photo and related items. Browse questions and answers related to product,
              and read the reviews from other customers. Write a question/answer as well as reviews for the product to help other customers.
            </div>
            <div className="project-tech-block">
              <span className="project-tech">React</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">HTML</span>
              <span className="project-tech">CSS</span>
              <span className="project-tech">Jest</span>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project;