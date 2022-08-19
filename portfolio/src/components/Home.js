import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'

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
          <h2 className="home-h2">I develop apps and solve problems</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home