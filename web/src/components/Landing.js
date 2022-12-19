import logoPink from '../images/logo_pink.png';
import { NavLink } from 'react-router-dom';
import '../styles/layout/Landing.scss';
//Components
import LandingStars from './LandingStars';
import Footer from './Footer';

const Landing = () => {
  return (
    <>
      <section className='landing'>
        <LandingStars />
        <div className='landing__logo'>
          <img src={logoPink} alt='Awesome profile cards' className='landing__logo__img' />
        </div>
        <h1 className='landing__title'>Crea tu tarjeta de visita</h1>
        <p className='landing__text'>Crea contactos profesionales estelares de forma fácil y cómoda</p>
        <div className='landing__icons'>
          <div className='landing__icons__item'>
            <i className='fa regular fa-object-ungroup landing_icon'></i>
            <p className='landing__icons__item__text'>Diseña</p>
          </div>
          <div className='landing__icons__item icon_fill'>
            <i className='fa regular fa-keyboard landing_icon'></i>
            <p className='landing__icons__item__text'>Rellena</p>
          </div>
          <div className='landing__icons__item'>
            <i className='fa regular fa-share-nodes landing_icon'></i>
            <p className='landing__icons__item__text'>Comparte</p>
          </div>
        </div>
        <NavLink to='/card' className='landing__btn'>
          Comenzar
        </NavLink>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
