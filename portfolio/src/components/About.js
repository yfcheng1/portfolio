import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from './AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faDocker, faGolang, faJsSquare, faReact, faHtml5} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass] = useState('text-animate')

  return (
    <div className="about-page">
      <div className="text-zone">
        <h1 className="about-h1">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p className="about-text">
          I discovered my passion for software development during 2020. One of the reasons why I love being a software engineer is that
          coding can bring creative ideas come through. I also enjoy working with the latest technologies on challenging and diverse projects.
        </p>
        <p className="about-text">
          I am a persistent person. I always committed and follow through my tasks until they are fully complete.
          I would love to work on a team with brilliant engineers where we can learn from each other.

        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#EC4D28" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGolang} color="#007d9c" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNode} color="green" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default About;