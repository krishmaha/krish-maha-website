import { Link } from 'react-router-dom';
import './index.scss';
import '../Layout/index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const greetingArray = ['H', 'i', '!']
  const nameArray = ['I', "'", 'm', ' ', 'K', 'r', 'i', 's', 'h']
  const jobArray = ['a', ' ', 'f', 'u', 'l', 'l', '-', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  console.log(setLetterClass)
  console.log(jobArray)
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters letterClass={letterClass} strArray={greetingArray} idx={12} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        {/* <img src={LogoTitle} alt="developer" /> */}
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} />
        </h1>
        <div className='subheading'>
          <h2>SWE Intern @ KAIKAKU AI</h2>
          <h2>Computing Student @ Imperial College London</h2>
        </div>

        <div className='contact-me-container'>
          <Link to='/contact' className='contact-button'>CONTACT ME</Link>
        </div>
      </div>
    </div>
  )
}


export default Home;