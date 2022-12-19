import '../styles/components/Header.scss';
import logoPlain from '../images/logo_plain.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <NavLink to='/' className='header__link'>
        <img src={logoPlain} alt='Awesome profile cards' className='header__link__logo' />
      </NavLink>
      <div className='stars_create'>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
    </header>
  );
}

export default Header;
