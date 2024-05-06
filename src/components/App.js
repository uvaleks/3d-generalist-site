import { Navigate, Routes, Route, useNavigate, redirect, useLocation } from 'react-router-dom';
import { withRouter } from './withRouter'
import { NavHashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Tool from './Tool';
import Case from './Case';
import Contacts from './Contacts';

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(6);

  useEffect(() => {
      window.addEventListener('scroll', scrollProgress);
      return () => window.removeEventListener('scroll', scrollProgress);
  }, [])

  let location = useLocation();

  useEffect(() => {
    navigate('/#main-heading')
  }, [])

  useEffect(() => {
    window.history.replaceState(null, '', location.pathname);
  }, [location])

  const scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      console.log('scrollPx: ', document.documentElement.scrollTop)

      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      console.log('winHeightPx: ', winHeightPx)

      const vh = window.innerHeight / 100;
      const start = 0 * vh;
      const stop = 100 * vh;

      if (scrollPx > start && scrollPx < stop) {
      const scrollPos = Math.ceil(1/((scrollPx - start) / winHeightPx))
      console.log(((scrollPx - start) / (winHeightPx - start)))
      console.log('scrollPos: ', scrollPos)
      if (0 < scrollPos && scrollPos < 7) {
          setCount(scrollPos)
      }
      }
  }

  return (
    <div className="page">
      <Header/>
      <main className="main">
        <Routes>
          <Route path="*" element={<Navigate to="/#main-heading" />}/>
          <Route path="/" element={
            <>
              <div className="main__title" id="main-heading" smooth>
                <h1 className="main__title-heading">Ivan<br/>Cher-<br/>ganov</h1>
                <h2 className="case__subtitle">3D Generalist<br/>Portfolio</h2>
              </div>
              {/* <div className="main__title-letters" id="main-heading" smooth>
                <p className="main__title-heading-letter">c</p>
                <p className="main__title-heading-letter">h</p>
                <p className="main__title-heading-letter">e</p>
                <p className="main__title-heading-letter">r</p>
                <p className="main__title-heading-letter">g</p>
                <p className="main__title-heading-letter">a</p>
                <p className="main__title-heading-letter">n</p>
                <p className="main__title-heading-letter">o</p>
                <p className="main__title-heading-letter">v</p>
              </div> */}
              <div className="main__grid">
              <NavHashLink
                className='main__grid-link main__grid_sanada-01'
                to='/samurai-portrait#samurai-heading' smooth>
                  <img className="main__grid-img" src={window.location.origin + `/images/grid/01-samurai-01.jpg`} alt="Sanada"/>
                  <div className="main__grid-img-number">01</div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_sanada-02'
                to='/samurai-portrait#samurai-heading' smooth>
                  <img className="main__grid-img" src={window.location.origin + `/images/grid/01-samurai-02.jpg`} alt="Sanada"/>
                  <div className="main__grid-img-number">01</div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_sanada-03'
                to='/samurai-portrait#samurai-heading' smooth>
                  <img className="main__grid-img" src={window.location.origin + `/images/grid/01-samurai-03.jpg`} alt="Sanada"/>
                  <div className="main__grid-img-number">01</div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_hairstyles-01'
                to='/hairstyles#hairstyles-heading' smooth>
                <img className="main__grid-img" src={window.location.origin + `/images/grid/02-hairstyles-01.jpg`} alt="Hairstyles"/>
                <div className="main__grid-img-number">02</div>
              </NavHashLink>
              {/* <NavHashLink
                className='main__grid-link main__grid_hairstyles-02'
                to='/hairstyles#hairstyles-heading' smooth>
                <img className="main__grid-img" src={window.location.origin + `/images/grid/02-hairstyles-02.jpg`} alt="Hairstyles"/>
                <div className="main__grid-img-number">02</div>
              </NavHashLink> */}
              <NavHashLink
                className='main__grid-link main__grid_hairstyles-04'
                to='/hairstyles#hairstyles-heading' smooth>
                <img className="main__grid-img" src={window.location.origin + `/images/grid/02-hairstyles-04.jpg`} alt="Hairstyles"/>
                <div className="main__grid-img-number">02</div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_hairstyles-05'
                to='/hairstyles#hairstyles-heading' smooth>
                <img className="main__grid-img" src={window.location.origin + `/images/grid/02-hairstyles-05.jpg`} alt="Hairstyles"/>
                <div className="main__grid-img-number">02</div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_husband-01'
                to='/ideal-husband#ideal-husband-heading' smooth>
                <img className="main__grid-img main__grid-img_husband-01" src={window.location.origin + `/images/grid/03-husband-01.jpg`} alt="An Ideal Husband"/>
                <div className="main__grid-img-number">03</div>
              </NavHashLink>
              <NavHashLink
                className='main__grid-link main__grid_husband-02'
                to='/ideal-husband#ideal-husband-heading' smooth>
                <img className="main__grid-img main__grid-img_husband-02" src={window.location.origin + `/images/grid/03-husband-02.jpg`} alt="An Ideal Husband"/>
                <div className="main__grid-img-number">03</div>
              </NavHashLink>
              {/* <NavHashLink
                className='main__grid-link main__grid_facial-anatomy-01'
                to='/facial-anatomy#facial-anatomy-heading' smooth>
                <img className="main__grid-img" src={window.location.origin + `/images/grid/04-face-anatomy-01.jpg`} alt="Facial Anatomy"/>
                <div className="main__grid-img-number">04</div>
              </NavHashLink> */}
              <NavHashLink
                className='main__grid-link main__grid_facial-anatomy-02'
                to='/facial-anatomy#facial-anatomy-heading' smooth>
                <img className="main__grid-img" src={window.location.origin + `/images/grid/04-face-anatomy-02.jpg`} alt="Facial Anatomy"/>
                <div className="main__grid-img-number">04</div>
              </NavHashLink>
              </div>
            </>
          } />
          <Route path="/samurai-portrait" element={
            <Case>
              <div className="case__header case__header_hero" id="samurai-heading" smooth>
                <h1 className="case__title">Hiroyuki Sanada Samurai portrait</h1>
                <h2 className="case__subtitle">My tribute to a great actor<br/>and an absolute beauty<br/>of a samurai armour</h2>
                <div className="case__toolbox case__toolbox_hero">
                <Tool
                    img={'/images/tools-logo/tool-logo-arnold-color.png'}
                    name={'Arnold'}
                    light={true}
                />
                <Tool
                    img={'/images/tools-logo/tool-logo-maya-color.png'}
                    name={'Maya'}
                    light={true}
                />
                <Tool
                    img={'/images/tools-logo/tool-logo-substance-color.svg'}
                    name={'Substance\n3D Painter'}
                    light={true}
                    invert={true}
                />
                <Tool
                    img={'/images/tools-logo/tool-logo-zbrush.svg'}
                    name={'ZBrush'}
                    light={true}
                    invert={true}
                />
                </div>
              </div>
              {/* <img className="case__img" src={window.location.origin + `/images/samurai/keyframes/${count}.png`} alt="Sanada"/> */}
              {/* <img className="case__img case__img_hero" src={window.location.origin + `/images/samurai/ivan-cherganov-samurai-portrait-01.jpg`} alt="Sanada"/> */}
              <img className="case__img case__img_hero" src={window.location.origin + `/images/samurai/ivan-cherganov-samurai-portrait-02.jpg`} alt="Sanada"/>
              <img className="case__img" src={window.location.origin + `/images/samurai/ivan-cherganov-samurai-portrait-04.jpg`} alt="Sanada"/>
              <img className="case__img case__img_hero" src={window.location.origin + `/images/samurai/ivan-cherganov-samurai-portrait-05.jpg`} alt="Sanada"/>
              <img className="case__img" src={window.location.origin + `/images/samurai/ivan-cherganov-hairstyle-breakup.gif`} alt="Sanada"/>
              {/* <img className="case__img" src={window.location.origin + `/images/samurai/ivan-cherganov-samurai-portrait-07.jpg`} alt="Sanada"/> */}
              {/* <img className="case__img" src={window.location.origin + `/images/samurai/ivan-cherganov-samurai-portrait-10.jpg`} alt="Sanada"/> */}
            </Case>
          } />
          <Route path="/hairstyles" element={
            <Case>
              <>
                <div className="case__header case__header_hero" id="hairstyles-heading" smooth>
                  <h1 className="case__title">Hairstyles</h1>
                  <h2 className="case__subtitle">Hairstyles for XGen masterclass<br/>I developed as a part of a 2-year<br/>program for 3d generalists<br/>at CG-school in Moscow</h2>
                  <div className="case__toolbox case__toolbox_hero">
                    <Tool
                      img={'/images/tools-logo/tool-logo-maya-color.png'}
                      name={'Maya'}
                      light={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-arnold-color.png'}
                      name={'Arnold'}
                      light={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-ps.svg'}
                      name={'Photoshop'}
                      light={true}
                      invert={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-zbrush.svg'}
                      name={'ZBrush'}
                      light={true}
                      invert={true}
                    />
                  </div>
                </div>
                <img className="case__img case__img_hero" src={window.location.origin + `/images/hairstyles/ivan-cherganov-pony-tail-side-beauty-render-reverse.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/hairstyles/ivan-cherganov-photoreal-hairstyle-beauty-render-front.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/hairstyles/ivan-cherganov-photoreal-hairstyle-fornt-back-viewport.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/hairstyles/ivan-cherganov-pony-tail-back-beauty-render.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/hairstyles/ivan-cherganov-pony-tail-process.gif`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/hairstyles/ivan-cherganov-pony-tail-side-back-viewport.jpg`} alt="Hairstyle"/>
              </>
            </Case>
          } />
          <Route path="/ideal-husband" element={
            <Case>
              <div className="case__header" id="ideal-husband-heading" smooth>
                <h1 className="case__title">"An Ideal Husband" character illustrations</h1>
                {/* <h2 className="case__subtitle">My tribute to a great actor and an absolute beauty of a samurai armour</h2> */}
                <div className="case__toolbox case__toolbox_hero">
                <Tool
                    img={'/images/tools-logo/tool-logo-ps-color.png'}
                    name={'Photoshop'}
                    light={true}
                    invert={true}
                />
                </div>
              </div>
              <img className="case__img" src={window.location.origin + `/images/ideal-husband/ivan-cherganov-mrs-cheveley.jpg`} alt="Mrs. Cheveley"/>
              <img className="case__img" src={window.location.origin + `/images/ideal-husband/ivan-cherganov-sir-chiltern.jpg`} alt="Sir Chiltern"/>
              <img className="case__img" src={window.location.origin + `/images/ideal-husband/ivan-cherganov-lord-goring.jpg`} alt="Lord Goring"/>
              <img className="case__img" src={window.location.origin + `/images/ideal-husband/ivan-cherganov-lady-chiltern.jpg`} alt="Lady Chiltern"/>
            </Case>
          } />
          <Route path="/facial-anatomy" element={
            <Case>
              <>
                <div className="case__header case__header_hero" id="facial-anatomy-heading" smooth>
                  <h1 className="case__title">Facial Anatomy Studies</h1>
                  <div className="case__toolbox">
                    <Tool
                      img={'/images/tools-logo/tool-logo-zbrush.svg'}
                      name={'ZBrush'}
                      light={true}
                      invert={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-arnold-color.png'}
                      name={'Arnold'}
                      light={true}
                    />
                  </div>
                </div>
                <img className="case__img case__img_hero" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-portrait-01.jpg`} alt="Facial Anatomy Studies"/>
                <img className="case__img" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-portrait-03.jpg`} alt="Facial Anatomy Studies"/>
                <img className="case__img" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-portrait-04.jpg`} alt="Facial Anatomy Studies"/>
                <img className="case__img" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-portrait-05.jpg`} alt="Facial Anatomy Studies"/>
                <img className="case__img" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-portrait-06.jpg`} alt="Facial Anatomy Studies"/>
                <img className="case__img" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-portrait-07.jpg`} alt="Facial Anatomy Studies"/>
                <img className="case__img" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-all.jpg`} alt="Facial Anatomy Studies"/>
                <img className="case__img" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-process-gif.gif`} alt="Facial Anatomy Studies"/>
                <img className="case__img case__img_hero" src={window.location.origin + `/images/facial-antomy/ivan-cherganov-bale.jpg`} alt="Bale"/>
              </>
            </Case>
          } />
          <Route path="/contacts" element={
            <Contacts id="contacts-heading" smooth>
                <img className="contacts__avatar" src="images/contacts/ivan-cherganov-avatar-tall.jpeg" alt="Ivan Cherganov Avatar"/>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Ivan Cherganov</h2>
                  <p className="contacts__text">I'm a 3D Character Artist / 3D Grooming Artist working in the game and film industry</p>
                  <div className="contacts__point">
                    <a href="https://t.me/ivan_cherganov" target='_blank' rel="noreferrer" className="contacts__button">
                      <img className="contacts__button-img" src='images/contacts/telegram-logo-button.png' alt="Telegram"/>
                      <p className="contacts__button-text">Write me a message</p>
                    </a>
                    <a href="mailto:ivan.cherganov@gmail.com" className="contacts__button">
                      <img className="contacts__button-img" src='images/contacts/email-button.png' alt="Email"/>
                      <p className="contacts__button-text">Write me an email</p>
                    </a>
                    <a href="https://www.artstation.com/ivan_cherganov" target='_blank' rel="noreferrer" className="contacts__button">
                      <img className="contacts__button-img" src='images/contacts/artstation-logo-button.svg' alt="ArtStation"/>
                    </a>
                  </div>
                </div>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Experience</h2>
                  <a href="https://quebec.ubisoft.com" target='_blank' rel="noreferrer" className="contacts__point contacts__point_exp">
                    <p className="contacts__period">2021–2023</p>
                    <img className="contacts__img" src='images/contacts/ubisoft-quebec-logo.svg' alt="Ubisoft Quebec"/>
                    <p className="contacts__text">3D Character Artist</p>
                  </a>
                </div>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Education</h2>
                  <a href="https://scream.school" target='_blank' rel="noreferrer" className="contacts__point contacts__point_exp">
                    <p className="contacts__period">2014–2016</p>
                    <img className="contacts__img contacts__img_scream-school" src='images/contacts/scream-school-logo.svg' alt="Scream School"/>
                    <p className="contacts__text">Visual effects and Character Art for films</p>
                  </a>
                </div>
                <div className="contacts__block">
                  <h2 className="contacts__subtitle">Tools</h2>
                  <div className="contacts__toolbox">
                  <Tool
                      img={'/images/tools-logo/tool-logo-substance-color.svg'}
                      name={'Substance\n3D Painter'}
                      light={true}
                      invert={true}
                      contacts={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-ps-color.png'}
                      name={'Photoshop'}
                      light={true}
                      invert={true}
                      contacts={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-lightroom.svg'}
                      name={'Lightroom'}
                      light={true}
                      invert={true}
                      contacts={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-maya-color.png'}
                      name={'Maya'}
                      light={true}
                      contacts={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-arnold-color.png'}
                      name={'Arnold'}
                      light={true}
                      contacts={true}
                    />
                    <Tool
                      img={'/images/tools-logo/tool-logo-zbrush.svg'}
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
