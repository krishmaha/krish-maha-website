import KrishLogo from '../../assets/images/krish-logo.png';
import './logo.scss';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='solid-logo' src={KrishLogo} alt='K' />
    </div>
  )
}

export default Logo;