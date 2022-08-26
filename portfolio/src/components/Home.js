import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from './AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faDocker, faGolang, faJsSquare, faReact, faHtml5} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = ['Y', 'u', 'f', 'a', 'n', 'g', ' ', 'C', 'h', 'e', 'n', 'g'];

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="home-h1">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <h2 className="home-h2">I develop apps and solve problems.</h2>
          <Link to="/portfolio/contact" className="flat-button">
            CONTACT ME
          </Link>
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home