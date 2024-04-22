import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
    <img className="header__logo" src='/images/ivan-cherganov-avatar.jpg' alt="Ivan Cherganov"/>
    <ul className="header__menu">
      <NavLink className="header__menu-link" to='/samurai-portrait'>Samurai Portrait</NavLink>
      <NavLink className="header__menu-link" to='/hairstyles'>Hairstyles</NavLink>
      <NavLink className="header__menu-link">An Ideal Husband</NavLink>
      <NavLink className="header__menu-link">Facial Anatomy</NavLink>
      <NavLink className="header__menu-link">Contacts</NavLink>
    </ul>
    </header>
  );
}

export default Header;