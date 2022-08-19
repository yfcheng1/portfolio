import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from './AnimatedLetters';

const Contact = () => {
  const [letterClass] = useState('text-animate');

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="about-h1">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G', 'e', 't', ' ', 'I', 'n', ' ', 'T', 'o', 'u', 'c', 'h']}
              idx={15}
            />
          </h1>
          <p className="about-text">
            Currently I am looking for opportunities in software engineering. I look forward to hearing from you and I will get back to you soon!
          </p>
          <a className="flat-button" href="mailto:yufang.cheng1@gmail.com">SAY HI</a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact;