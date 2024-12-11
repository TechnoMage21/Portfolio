import React from "react";
import Card from "react-bootstrap/Card";
import "./Skills.css";
import html from './html.png';
import css from './css.png';
import java from './java.png';
import js from './js.png';
import react from './react.png';
import solidity from './solidity.png';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

export default function Skills() {
  return (
    <>
      <div className="skill-main" id="skill">
        <div className="skill-text">
          <h1>Skills <span className="icon"><MenuBookRoundedIcon fontSize="inherit" style={{color:"#602979"}}/></span></h1>
          
        </div>
        <div className="skillmain-card">
          <Card className="skillCards">
            <Card.Body variant="primary">
              <Card.Img variant="top" src={html} style={{width:'70%'}}/>
              
            </Card.Body>
          </Card>
          <Card className="skillCards">
            <Card.Body variant="primary">
              <Card.Img variant="top" src={css} style={{width:'70%'}}/>
              
            </Card.Body>
          </Card>
          <Card className="skillCards">
            <Card.Body variant="primary">
              <Card.Img variant="top" src={java} style={{width:'70%'}}/>
              
            </Card.Body>
          </Card>
          <Card className="skillCards">
            <Card.Body variant="primary">
              <Card.Img variant="top" src={js} style={{width:'70%'}}/>
              
            </Card.Body>
          </Card>
          <Card className="skillCards">
            <Card.Body variant="primary">
              <Card.Img variant="top" src={react} style={{width:'70%'}}/>
              
            </Card.Body>
          </Card>
          <Card className="skillCards">
            <Card.Body variant="primary">
              <Card.Img variant="top" src={solidity} style={{width:'70%'}}/>
              
            </Card.Body>
          </Card>

        </div>
      </div>
    </>
  );
}
