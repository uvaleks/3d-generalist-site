import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';


function Header({ tale, isMenuOpen, setMenuOpen, caseHeader, caseSubtitle, tools}) {
  const navigate = useNavigate();
  let location = useLocation();

  const toggleBurger = () => {
    setMenuOpen(!isMenuOpen);
  }

  const onNavClick = () => {
    setMenuOpen(false);
  }
  

  return (
    <header className={`header${isMenuOpen ? ' header_active': ''}`}>
    {caseHeader && <div className="header__title-wrapper">
      <h1 className="header__title">{caseHeader}</h1>
      {caseSubtitle && <h2 className="header__subtitle">{caseSubtitle}</h2>}
      {tools}
    </div>}
    <div onClick={toggleBurger} className={`header__burger${isMenuOpen ? ' header__burger_active' : ''}`}>
      <span className="header__burger-first-line"></span>
      <span className="header__burger-second-line"></span>
      <span className="header__burger-third-line"></span>
    </div>
    <ul className={`header__menu${isMenuOpen ? ' header__menu_active' : ''}`}>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/main#main' ? " header__menu-link_current" : ""}`}
        onClick={onNavClick} 
        to='/main#main' smooth>
        <p className="header__menu-link-p">Main</p>
        </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/samurai-portrait#samurai-portrait' ? " header__menu-link_current" : ""}${`${tale === 'samurai' ? " header__menu-link_hovered" : ""}`}`}
        onClick={onNavClick}
        to='/samurai-portrait#samurai-portrait' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>01</span>Samurai Portrait</p>
      </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/hairstyles#hairstyles' ? " header__menu-link_current" : ""}${`${tale === 'hairstyles' ? " header__menu-link_hovered" : ""}`}`}
        to='/hairstyles#hairstyles' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>02</span>Hairstyles</p>
      </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/ideal-husband#ideal-husband' ? " header__menu-link_current" : ""}${`${tale === 'husband' ? " header__menu-link_hovered" : ""}`}`}
        onClick={onNavClick}
        to='/ideal-husband#ideal-husband' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>03</span>An Ideal Husband</p>
      </NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/facial-anatomy#facial-anatomy' ? " header__menu-link_current" : ""}${`${tale === 'anatomy' ? " header__menu-link_hovered" : ""}`}`}
        onClick={onNavClick}
        to='/facial-anatomy#facial-anatomy' smooth>
        <p className="header__menu-link-p"><span className={`header__menu-link-span`}>04</span>Facial Anatomy</p></NavHashLink>
      <NavHashLink
        className={`header__menu-link${`${location.pathname}${location.hash}` === '/contacts#contacts' ? " header__menu-link_current" : ""}`}
        onClick={onNavClick}
        to='/contacts#contacts' smooth>Contacts</NavHashLink>
    </ul>
    </header>
  );
}

export default Header;