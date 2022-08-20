import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  return (
    <div className = "nav-bar">
      <Link className="logo" to="/portfolio">
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" className="home-link" to="/portfolio">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/portfolio/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/portfolio/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="project-link" to="/portfolio/project">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
        </NavLink>
      </nav>
      <ul className="sidebar-ul">
        <li className="sidebar-li">
          <a
            href="https://www.linkedin.com/in/yufang-cheng/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li className="sidebar-li">
          <a
            href="https://github.com/yfcheng1"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;