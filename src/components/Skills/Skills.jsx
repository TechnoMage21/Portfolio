import React from "react";
import Card from "react-bootstrap/Card";
import "./Skills.css";
import html from './html.png';
import css from './css.png';
import mysql from './mysql.jpg';
import js from './js.png';
import react from './react.png';
import php from './php.png'

import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

export default function Skills() {
  return (
    <div className="skill-main" id="skill">
      <div className="skill-text">
        <br />
        
        <h1>Skills <span className="icon"><MenuBookRoundedIcon fontSize="inherit" style={{color:"#602979"}}/></span></h1>
      </div>
      <div className="skillmain-card">
        {[
          { src: html, alt: 'HTML' },
          { src: css, alt: 'CSS' },
          { src: mysql, alt: 'MySQL' },
          { src: js, alt: 'JavaScript' },
          { src: react, alt: 'React' },
          { src: php, alt: 'PHP' }
        ].map((item, index) => (
          <Card className="skillCards" key={index}>
            <Card.Body>
              <Card.Img variant="top" src={item.src} alt={item.alt} />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
