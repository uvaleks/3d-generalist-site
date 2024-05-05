import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function Header() {
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <header className="header">
    <img className="header__logo" src='/images/ivan-cherganov-avatar.jpg' alt="Ivan Cherganov"/>
    <ul className="header__menu">
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/#main-heading' ? " header__menu-link_current" : ""}`}
        to='/#main-heading' smooth>
        <p className="header__menu-link-p"><span className="header__menu-link-span">00</span>Main</p>
        </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/samurai-portrait#samurai-heading' ? " header__menu-link_current" : ""}`}
        to='/samurai-portrait#samurai-heading' smooth>Samurai Portrait</NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/hairstyles#hairstyles-heading' ? " header__menu-link_current" : ""}`}
        to='/hairstyles#hairstyles-heading' smooth>Hairstyles</NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/ideal-husband#ideal-husband-heading' ? " header__menu-link_current" : ""}`}
        to='/ideal-husband#ideal-husband-heading' smooth>An Ideal Husband</NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/facial-anatomy#facial-anatomy-heading' ? " header__menu-link_current" : ""}`}
        to='/facial-anatomy#facial-anatomy-heading' smooth>Facial Anatomy</NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/contacts#contacts-heading' ? " header__menu-link_current" : ""}`}
        to='/contacts#contacts-heading' smooth>Contacts</NavHashLink>
    </ul>
    </header>
  );
}

export default Header;