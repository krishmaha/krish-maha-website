// import LogoTitle from '../../assets/images/krish-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';
import '../Layout/index.scss';

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hi! <br /> I&apos;m Krish,
        {/* <img src={LogoTitle} alt="developer" /> */}
        <br />
        a full-stack developer
        </h1>
        <div className='subheading'>
          <h2>Computing Student @ Imperial College London</h2>
        </div>

        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}


export default Home;