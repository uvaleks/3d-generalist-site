import { Navigate, Routes, Route, useNavigate, redirect, useLocation } from 'react-router-dom';
import { withRouter } from './withRouter'
import { NavHashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Tool from './Tool';
import Case from './Case';
import Contacts from './Contacts';

import GridSanada02 from '../images/grid/01-samurai-02.jpg'
import GridSanada03 from '../images/grid/01-samurai-03.jpg'
import GridSanada04 from '../images/grid/01-samurai-04.jpg'
import GridHairstyles01 from '../images/grid/02-hairstyles-01.jpg'
import GridHairstyles04 from '../images/grid/02-hairstyles-04.jpg'
import GridHusband01 from '../images/grid/03-husband-01.jpg'
import GridHusband02 from '../images/grid/03-husband-02.jpg'
import GridAnatomy03 from '../images/grid/04-face-anatomy-03.jpg'

import ToolArnold from '../images/tools-logo/tool-logo-arnold-color.png'
import ToolMaya from '../images/tools-logo/tool-logo-maya-color.png'
import ToolPs from '../images/tools-logo/tool-logo-ps-color.png'
import ToolLightroom from '../images/tools-logo/tool-logo-lightroom.svg'
import ToolSubstance from '../images/tools-logo/tool-logo-substance-color.svg'
import ToolZBrush from '../images/tools-logo/tool-logo-zbrush.svg'

import ContactsArtstation from '../images/contacts/artstation-logo-button.svg'
import ContactsEmail from '../images/contacts/email-button.png'
import ContactsAvatar from '../images/contacts/ivan-cherganov-avatar-tall.jpeg'
import ContactsScreamSchool from '../images/contacts/scream-school-logo.svg'
import ContactsTelegram from '../images/contacts/telegram-logo-button.png'
import ContactsUbisoft from '../images/contacts/ubisoft-quebec-logo.svg'

import CaseSanada01 from '../images/samurai/ivan-cherganov-samurai-portrait-01.jpg'
import CaseSanada02 from '../images/samurai/ivan-cherganov-samurai-portrait-02.jpg'
import CaseSanada04 from '../images/samurai/ivan-cherganov-samurai-portrait-04.jpg'
import CaseSanada05 from '../images/samurai/ivan-cherganov-samurai-portrait-05.jpg'
import CaseSanada07 from '../images/samurai/ivan-cherganov-samurai-portrait-07.jpg'
import CaseSanada10 from '../images/samurai/ivan-cherganov-samurai-portrait-10.jpg'
import CaseSanadaBreakup from '../images/samurai/ivan-cherganov-hairstyle-breakup.gif'

function App() {
  const navigate = useNavigate();
  const [caseHeader, setCaseHeader] = useState('');
  const [caseSubtitle, setCaseSubtitle] = useState('');
  const [tale, setTale] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(true);

  function MouseOver(event) {
    if (event.target.src) {
      if (event.target.src.includes('samurai')) {
        setTale('samurai');
      } else if (event.target.src.includes('hairstyles')) {
        setTale('hairstyles');
      } else if (event.target.src.includes('anatomy')) {
        setTale('anatomy');
      } else if (event.target.src.includes('husband')) {
        setTale('husband');
      }
    }
  }

  function MouseOut(event) {
    setTale('');
  }

  let location = useLocation();

  useEffect(() => {
    navigate('/#main-heading')
  }, [])

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCaseHeader("Ivan\nCherganov")
        setCaseSubtitle('3D Character Artist\nPortfolio')
        break;
      case "/samurai-portrait":
        setCaseHeader('Hiroyuki Sanada\nSamurai portrait')
        setCaseSubtitle('My tribute to a great actor and an absolute beauty of a samurai armour')
        break;
      default:
        setCaseHeader("")
    }
  }, [location.pathname])

  useEffect(() => {
    window.history.replaceState(null, '', location.pathname);
  }, [location])

  return (
    <div className={`page${isMenuOpen ? ' page__vertical' : ''}`}>
      <Header
        tale={tale}
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        caseHeader={caseHeader}
        caseSubtitle={caseSubtitle}
      >
        <>
        <div className="header__toolbox">
          <Tool
              img={ToolArnold}
              name={'Arnold'}
              light={true}
          />
          <Tool
              img={ToolMaya}
              name={'Maya'}
              light={true}
          />
          </div>
          <div className="header__toolbox">
          <Tool
              img={ToolSubstance}
              name={'Substance\n3D Painter'}
              light={true}
              invert={true}
          />
          <Tool
              img={ToolZBrush}
              name={'ZBrush'}
              light={true}
              invert={true}
          />
        </div>
        </>
      </Header>
      <main className="main">
        <Routes>
          <Route path="*" element={<Navigate to="/#main-heading" />}/>
          <Route path="/" element={
            <>
              <div className="main__grid" id="main-heading" smooth='true'>
              <NavHashLink
                className='main__grid-link main__grid_sanada-02'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/samurai-portrait#samurai-heading' smooth='true'>
                  <img className="main__grid-img" src={GridSanada02} alt="Sanada"/>
                  <div className="main__grid-img-number-wrapper">
                    <div className="main__grid-img-number">01</div>
                  </div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_sanada-03'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/samurai-portrait#samurai-heading' smooth='true'>
                  <img className="main__grid-img" src={GridSanada03} alt="Sanada"/>
                  <div className="main__grid-img-number-wrapper">
                    <div className="main__grid-img-number">01</div>
                  </div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_sanada-01'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/samurai-portrait#samurai-heading' smooth='true'> 
                  <img className="main__grid-img" src={GridSanada04} alt="Sanada"/>
                  <div className="main__grid-img-number-wrapper">
                    <div className="main__grid-img-number">01</div>
                  </div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_hairstyles-04'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/hairstyles#hairstyles-heading' smooth='true'>
                <img className="main__grid-img" src={GridHairstyles04} alt="Hairstyles"/>
                <div className="main__grid-img-number-wrapper">
                  <div className="main__grid-img-number">02</div>
                </div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_hairstyles-01'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/hairstyles#hairstyles-heading' smooth='true'>
                <img className="main__grid-img" src={GridHairstyles01} alt="Hairstyles"/>
                <div className="main__grid-img-number-wrapper">
                  <div className="main__grid-img-number">02</div>
                </div>
              </NavHashLink>
              <div
                className='main__grid-link main__grid_blank-01'>
              </div>
              <NavHashLink
                className='main__grid-link main__grid_husband-01'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/ideal-husband#ideal-husband-heading' smooth='true'>
                <img className="main__grid-img main__grid-img_husband-01" src={GridHusband01} alt="An Ideal Husband"/>
                <div className="main__grid-img-number-wrapper">
                  <div className="main__grid-img-number">03</div>
                </div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_husband-02'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/ideal-husband#ideal-husband-heading' smooth='true'>
                <img className="main__grid-img main__grid-img_husband-02" src={GridHusband02} alt="An Ideal Husband"/>
                <div className="main__grid-img-number-wrapper">
                  <div className="main__grid-img-number">03</div>
                </div>
              </NavHashLink>
              <div
                className='main__grid-link main__grid_blank-02'>
              </div>
              <NavHashLink
                className='main__grid-link main__grid_facial-anatomy-03'
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                to='/facial-anatomy#facial-anatomy-heading' smooth='true'>
                <img className="main__grid-img" src={GridAnatomy03} alt="Facial Anatomy"/>
                <div className="main__grid-img-number-wrapper">
                  <div className="main__grid-img-number">04</div>
                </div>
              </NavHashLink>
              </div>
            </>
          } />
          <Route path="/samurai-portrait" element={
            <Case>
              <div id="samurai-heading" smooth='true'>
                <img className="case__img case__img_hero" src={CaseSanada02} alt="Sanada"/>
                <img className="case__img" src={CaseSanada04} alt="Sanada"/>
                <img className="case__img case__img_hero" src={CaseSanada05} alt="Sanada"/>
                <img className="case__img" src={CaseSanada07} alt="Sanada"/>
                <img className="case__img case__img_hero" src={CaseSanada01} alt="Sanada"/>
                <img className="case__img" src={CaseSanada10} alt="Sanada"/>
                <img className="case__img" src={CaseSanadaBreakup} alt="Sanada"/>
              </div>
            </Case>
          } />
          <Route path="/hairstyles" element={
            <Case>
              <>
                <div className="case__header" id="hairstyles-heading" smooth='true'>
                  <h1 className="case__title">Hairstyles</h1>
                  <h2 className="case__subtitle">Hairstyles for XGen masterclass I developed as a part of a 2-year program for 3d generalists at CG-school in Moscow</h2>
                  <div className="case__toolbox">
                    <Tool
                      img={ToolMaya}
                      name={'Maya'}
                      light={true}
                    />
                    <Tool
                      img={ToolArnold}
                      name={'Arnold'}
                      light={true}
                    />
                    <Tool
                      img={ToolPs}
                      name={'Photoshop'}
                      light={true}
                      invert={true}
                    />
                    <Tool
                      img={ToolZBrush}
                      name={'ZBrush'}
                      light={true}
                      invert={true}
                    />
                  </div>
                </div>
                <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/hairstyles/ivan-cherganov-pony-tail-side-beauty-render-reverse.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/hairstyles/ivan-cherganov-photoreal-hairstyle-beauty-render-front.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/hairstyles/ivan-cherganov-photoreal-hairstyle-fornt-back-viewport.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/hairstyles/ivan-cherganov-pony-tail-back-beauty-render.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/hairstyles/ivan-cherganov-pony-tail-process.gif`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/hairstyles/ivan-cherganov-pony-tail-side-back-viewport.jpg`} alt="Hairstyle"/>
              </>
            </Case>
          } />
          <Route path="/ideal-husband" element={
            <Case>
              <div className="case__header" id="ideal-husband-heading" smooth='true'>
                <h1 className="case__title">An Ideal Husband<br/>character illustrations</h1>
                <div className="case__toolbox">
                <Tool
                    img={ToolPs}
                    name={'Photoshop'}
                    light={true}
                    invert={true}
                />
                </div>
              </div>
              <div className="case__img-wrapper case__img-wrapper_husband">
                <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/ideal-husband/ivan-cherganov-mrs-cheveley.jpg`} alt="Mrs. Cheveley"/>
              </div>
              <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/ideal-husband/ivan-cherganov-sir-chiltern.jpg`} alt="Sir Chiltern"/>
              <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/ideal-husband/ivan-cherganov-lord-goring.jpg`} alt="Lord Goring"/>
              <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/ideal-husband/ivan-cherganov-lady-chiltern.jpg`} alt="Lady Chiltern"/>
            </Case>
          } />
          <Route path="/facial-anatomy" element={
            <Case caseStyle={'case_facial-anatomy'}>
              <>
                <div className="case__header" id="facial-anatomy-heading" smooth='true'>
                  <h1 className="case__title">Facial Anatomy<br/>Studies</h1>
                  <div className="case__toolbox">
                    <Tool
                      img={ToolZBrush}
                      name={'ZBrush'}
                      light={true}
                      invert={true}
                    />
                    <Tool
                      img={ToolArnold}
                      name={'Arnold'}
                      light={true}
                    />
                  </div>
                </div>
                <div className="case__img-wrapper case__img-wrapper_anatomy">
                  <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-portrait-01.jpg`} alt="Facial Anatomy Studies"/>
                  <div className="case__img-shadow"></div>
                </div>
                <div className="case__img-wrapper">
                  <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-portrait-03.jpg`} alt="Facial Anatomy Studies"/>
                  <div className="case__img-shadow"></div>
                </div>
                <div className="case__img-wrapper">
                  <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-portrait-04.jpg`} alt="Facial Anatomy Studies"/>
                  <div className="case__img-shadow"></div>
                </div>  
                <div className="case__img-wrapper">              
                  <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-portrait-05.jpg`} alt="Facial Anatomy Studies"/>
                  <div className="case__img-shadow"></div>
                </div> 
                <div className="case__img-wrapper">
                  <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-portrait-06.jpg`} alt="Facial Anatomy Studies"/>
                  <div className="case__img-shadow"></div>
                </div>
                <div className="case__img-wrapper">
                  <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-portrait-07.jpg`} alt="Facial Anatomy Studies"/>
                  <div className="case__img-shadow"></div>
                </div>
                <div className="case__img-wrapper">
                  <img className="case__img case__img_hero" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-all.jpg`} alt="Facial Anatomy Studies"/>
                  <div className="case__img-shadow"></div>
                </div>
                <img className="case__img" src={window.location.origin + `/3d-generalist-site/images/facial-antomy/ivan-cherganov-process-gif.gif`} alt="Facial Anatomy Studies"/>
              </>
            </Case>
          } />
          <Route path="/contacts" element={
            <Contacts id="contacts-heading" smooth='true'>
                <div className="contacts__bio-wrapper">
                  <img className="contacts__avatar" src={ContactsAvatar} alt="Ivan Cherganov Avatar"/>
                  <div className="contacts__block contacts__block_bio">
                    <h2 className="contacts__subtitle">Ivan<br/>Cherganov</h2>
                    <p className="contacts__text">I'm a 3D Character Artist / 3D Grooming Artist working in the game and film industry</p>
                    <div className="contacts__point">
                      <a href="https://t.me/ivan_cherganov" target='_blank' rel="noreferrer" className="contacts__button">
                        <img className="contacts__button-img"  src={ContactsTelegram} alt="Telegram"/>
                        <p className="contacts__button-text">Write me a message</p>
                      </a>
                      <a href="mailto:ivan.cherganov@gmail.com" className="contacts__button">
                        <img className="contacts__button-img"  src={ContactsEmail} alt="Email"/>
                        <p className="contacts__button-text">Write me an email</p>
                      </a>
                      <a href="https://www.artstation.com/ivan_cherganov" target='_blank' rel="noreferrer" className="contacts__button">
                        <img className="contacts__button-img" src={ContactsArtstation} alt="ArtStation"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Experience</h2>
                  <a href="https://quebec.ubisoft.com" target='_blank' rel="noreferrer" className="contacts__point contacts__point_exp">
                    <p className="contacts__period">2021–2023</p>
                    <img className="contacts__img" src={ContactsUbisoft} alt="Ubisoft Quebec"/>
                    <p className="contacts__text">3D Character Artist</p>
                  </a>
                </div>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Education</h2>
                  <a href="https://scream.school" target='_blank' rel="noreferrer" className="contacts__point contacts__point_exp">
                    <p className="contacts__period">2014–2016</p>
                    <img className="contacts__img contacts__img_scream-school" src={ContactsScreamSchool} alt="Scream School"/>
                    <p className="contacts__text">Visual effects and Character Art for films</p>
                  </a>
                </div>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Tools</h2>
                  <div className="contacts__toolbox">
                  <Tool
                      img={ToolSubstance}
                      name={'Substance\n3D Painter'}
                      light={true}
                      invert={true}
                      contacts={true}
                    />
                    <Tool
                      img={ToolPs}
                      name={'Photoshop'}
                      light={true}
                      invert={true}
                      contacts={true}
                    />
                    <Tool
                      img={ToolLightroom}
                      name={'Lightroom'}
                      light={true}
                      invert={true}
                      contacts={true}
                    />
                    <Tool
                      img={ToolMaya}
                      name={'Maya'}
                      light={true}
                      contacts={true}
                    />
                    <Tool
                      img={ToolArnold}
                      name={'Arnold'}
                      light={true}
                      contacts={true}
                    />
                    <Tool
                      img={ToolZBrush}
                      name={'ZBrush'}
                      light={true}
                      invert={true}
                      contacts={true}
                    />
                  </div>
                </div>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Skills</h2>
                  <div className="contacts__point">
                    <p className="contacts__skill">3D Modeling</p>
                    <p className="contacts__skill">Character Modeling</p>
                    <p className="contacts__skill">Grooming</p>
                    <p className="contacts__skill"> PBR Texturing</p>
                  </div>
                </div>
            </Contacts>
          } />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
