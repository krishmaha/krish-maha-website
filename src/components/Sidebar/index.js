import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import krishLogo from '../../assets/images/krish-logo.png';
import krishSubtitle from '../../assets/images/krish-subtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return(
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img className='main-logo' src={krishLogo} alt='logo' />
        <img className='sub-logo' src={krishSubtitle} alt='krish' />
      </Link>

      <nav>
        <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a 
            target='_blank' 
            rel='noreferrer'
            href='https://www.linkedin.com/in/krish-maha/'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        
        <li>
          <a 
            target='_blank' 
            rel='noreferrer'
            href='https://github.com/krishmaha'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>

        <li>
          <a 
            target='_blank' 
            rel='noreferrer'
            href='https://www.instagram.com/_krish19_/'
          >
            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Sidebar;