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
          I discovered my passion for software development since 2020. <br></br>
          I enjoy working with the latest technologies on challenging and diverse projects.
          I also love learning new tech stacks and solving challenging problems.
          I would love to work on a team with brilliant engineers where we can learn from each other.
        </p>
        <p className="about-text">
          When I am not coding, I love snuggling with my cat, playing tennis and traveling with friends.

        </p>
        <h5 className="block-title">Technical Skills</h5>
        <div className="tech-block">
          <ul className="tech-skills">
            <li className="skill">JavaScript</li>
            <li className="skill">MySQL</li>
            <li className="skill">HTML5 & CSS3</li>
            <li className="skill">PostgreSQL</li>
            <li className="skill">React</li>
            <li className="skill">MongoDB</li>
            <li className="skill">Node.js</li>
            <li className="skill">Redis</li>
            <li className="skill">Express</li>
            <li className="skill">Docker</li>
            <li className="skill">Golang</li>
            <li className="skill">Jest</li>
          </ul>
        </div>
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