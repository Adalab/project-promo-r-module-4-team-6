import logoFooter from '../images/logo_adalab_purple.png';
import '../styles/layout/Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <small className='footer__copy'>Awesome profile-cards @2022</small>
      <div className='footer__logo'>
        <img src={logoFooter} alt='Logo de Adalab' className='footer__logo__img' />
      </div>
    </footer>
  );
}
export default Footer;
