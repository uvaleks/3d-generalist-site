import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

function Header({ tale }) {
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <header className="header">
    <img className="header__logo" src={`${location.pathname}3d-generalist-site/images/ivan-cherganov-avatar.jpg`} alt="Ivan Cherganov"/>
    <ul className="header__menu">
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/#main-heading' ? " header__menu-link_current" : ""}`}
        to='/#main-heading' smooth>
        <p className="header__menu-link-p">Main</p>
        </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/samurai-portrait#samurai-heading' ? " header__menu-link_current" : ""}${`${tale === 'samurai' ? " header__menu-link_hovered" : ""}`}`}
        to='/samurai-portrait#samurai-heading' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>01</span>Samurai Portrait</p>
      </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/hairstyles#hairstyles-heading' ? " header__menu-link_current" : ""}${`${tale === 'hairstyles' ? " header__menu-link_hovered" : ""}`}`}
        to='/hairstyles#hairstyles-heading' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>02</span>Hairstyles</p>
      </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/ideal-husband#ideal-husband-heading' ? " header__menu-link_current" : ""}${`${tale === 'husband' ? " header__menu-link_hovered" : ""}`}`}
        to='/ideal-husband#ideal-husband-heading' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>03</span>An Ideal Husband</p>
      </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/facial-anatomy#facial-anatomy-heading' ? " header__menu-link_current" : ""}${`${tale === 'anatomy' ? " header__menu-link_hovered" : ""}`}`}
        to='/facial-anatomy#facial-anatomy-heading' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>04</span>Facial Anatomy</p></NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/contacts#contacts-heading' ? " header__menu-link_current" : ""}`}
        to='/contacts#contacts-heading' smooth>Contacts</NavHashLink>
    </ul>
    </header>
  );
}

export default Header;