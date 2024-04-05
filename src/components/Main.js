import { useState, useEffect } from 'react';
function Main() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 7) {
      setTimeout(() => {
        setCount(count + 1)
      }, 500)
    }
  }, [count]) 

  // const html = document.documentElement;
  // const canvas = document.getElementById("canvas");
  // const context = canvas.getContext("2d");

  // const frameCount = 6;
  // const currentFrame = index => (
  //   `../images/pic${index.toString()}`
  // )

  // const preloadImages = () => {
  //   for (let i = 1; i < frameCount; i++) {
  //     const img = new Image();
  //     img.src = currentFrame(i);
  //   }
  // };

  // const img = new Image()
  // img.src = currentFrame(1);
  // canvas.width=684;
  // canvas.height=900;
  // img.onload=function(){
  //   context.drawImage(img, 0, 0);
  // }

  // const updateImage = index => {
  //   img.src = currentFrame(index);
  //   context.drawImage(img, 0, 0);
  // }

  // window.addEventListener('scroll', () => {  
  //   const scrollTop = html.scrollTop;
  //   const maxScrollTop = html.scrollHeight - window.innerHeight;
  //   const scrollFraction = scrollTop / maxScrollTop;
  //   const frameIndex = Math.min(
  //     frameCount - 1,
  //     Math.ceil(scrollFraction * frameCount)
  //   );
    
  //   requestAnimationFrame(() => updateImage(frameIndex + 1))
  // });

  // preloadImages()

  return (
    <main className="main">
      {/* <canvas id="canvas"/> */}
      <img className="main__pic" src={window.location.origin + `/images/${count}.png`} alt="Sanada"/>
    </main>
  );
}

export default Main;
