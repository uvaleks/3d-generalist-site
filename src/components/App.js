import { Routes, Route, useNavigate } from 'react-router-dom';
import { withRouter } from './withRouter'
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Tool from './Tool';
import Case from './Case';

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(6);

  useEffect(() => {
      window.addEventListener('scroll', scrollProgress);
      return () => window.removeEventListener('scroll', scrollProgress);
  }, [])

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
          <Route path="/samurai-portrait" element={
            <Case>
              <div className="case__header">
                <h1 className="case__title">Hiroyuki Sanada Samurai portrait</h1>
                <h2 className="case__subtitle">My tribute to a great actor and an absolute beauty of a samurai armour</h2>
                <div className="case__toolbox">
                <Tool
                    img={'/images/tools-logo/tool-logo-arnold-color.png'}
                    name={'Arnold'}
                />
                <Tool
                    img={'/images/tools-logo/tool-logo-maya-color.png'}
                    name={'Maya'}
                />
                <Tool
                    img={'/images/tools-logo/tool-logo-substance-color.svg'}
                    name={'Substance\n3D Painter'}
                />
                <Tool
                    img={'/images/tools-logo/tool-logo-zbrush.svg'}
                    name={'ZBrush'}
                    invert={true}
                />
                </div>
              </div>
              <img className="case__img" src={window.location.origin + `/images/${count}.png`} alt="Sanada"/>
              <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-samurai-portrait-01.jpg`} alt="Sanada"/>
              <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-samurai-portrait-02.jpg`} alt="Sanada"/>
              <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-samurai-portrait-07.jpg`} alt="Sanada"/>
              <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-samurai-portrait-10.jpg`} alt="Sanada"/>
            </Case>
          } />
            <Route path="/hairstyles" element={
            <Case>
              <>
                <div className="case__header">
                    <h1 className="case__title">Hairstyles</h1>
                    <h2 className="case__subtitle">Hairstyles for XGen masterclass I developed as a part of a 2-year program for 3d generalists at CG-school in Moscow</h2>
                </div>
                <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-photoreal-hairstyle-beauty-render-front.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-photoreal-hairstyle-fornt-back-viewport.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-pony-tail-back-beauty-render.jpg`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-pony-tail-process.gif`} alt="Hairstyle"/>
                <img className="case__img" src={window.location.origin + `/images/ivan-cherganov-pony-tail-side-back-viewport.jpg`} alt="Hairstyle"/>
              </>
            </Case>
          } />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
