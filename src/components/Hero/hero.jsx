import React from "react";
import logo from "./hero-image.png.avif";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-container" id="home">
        <div className="hero-content">
          <br />
          <br />
          <br />
       
          <h1 className="hero-subtitle">
            <br />
            I am a{" "}
            <span className="typewriter-text">
              <Typewriter
                words={["Web Developer", "Web Designer", "Quick Learner", "Frontend Developer Intern", "MCA Freshman", "MLSA"]}
                loop={false}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="cursor-style">
              <Cursor />
            </span>
          </h1>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Om Gupta" />
        </div>
      </div>
    </>
  );
}
