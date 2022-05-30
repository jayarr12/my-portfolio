import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef()

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['(Fullstack Developer)', '(Graphic Designer)'],
    });
  },[]);

  return (
    <>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="assets/roel.jpg" alt="" />
              </div>
            <div className="flip-card-back">
              <img src="assets/roel2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rogelio</h1>
          <h3>Drupal Developer <span ref={textRef}></span></h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    </>
  )
}
