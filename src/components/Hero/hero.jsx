import React from "react";
import logo from "./hero-image.png";
import { Typewriter, Cursor } from 'react-simple-typewriter';
import './hero.css';

export default function Hero() {


  return (
    <>
      <div className="about-main" style={{ textAlign: "center" }} id="home">
        <div className="about-text">
          <h1>Om Gupta</h1>
          <h1>
            I am a{" "}
            <span
              style={{
                fontFamily: "Arial",
                color: "rgb(14 101 255)",
                fontWeight: "bold",
              }}
            >
              <Typewriter
              words={['Web Developer',
              'Web Designer',
              'Quick Learner',
              'Frontend Developer',
              'MCA Freshman']}
              loop={false}
              typeSpeed={60}
              deleteSpeed={60}
              delaySpeed={1000}
            />
            </span>
            <span style={{color:'pink'}}> <Cursor /></span>
           
          </h1>
        </div>
        <div className="about-image">
          <img src={logo} alt="myimage" />
        </div>
      </div>
    </>
  );
}
