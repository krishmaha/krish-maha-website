import { Link } from 'react-router-dom';
import './index.scss';
import '../Layout/index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import Logo from '../Logo/logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const greetingArray = ['H', 'i', '!'];
  const nameArray = ['I', "'", 'm', ' ', 'K', 'r', 'i', 's', 'h'];
  const jobArray = ['a', ' ', 'f', 'u', 'l', 'l', '-', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span style={{ display: 'block', animationDelay: '0s' }}>
            <AnimatedLetters letterClass={letterClass} strArray={greetingArray} idx={12} />
          </span>
          <span style={{ display: 'block', animationDelay: '2s' }}>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          </span>
          <span style={{ display: 'block', animationDelay: '4s' }}>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} />
          </span>
        </h1>
        <div className='subheading'>
          <h2>SWE Intern @ KAIKAKU AI</h2>
          <h2>Computing Student @ Imperial College London</h2>
        </div>
        <div className='contact-me-container'>
          <Link to='/contact' className='contact-button'>CONTACT ME</Link>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
