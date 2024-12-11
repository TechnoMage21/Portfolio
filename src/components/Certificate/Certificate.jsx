import React from 'react';
import './Certificate.css';
import { useInView } from 'react-intersection-observer';

import Certificates from './Certificate.jpeg';
import Coursera from './Coursera.png';
import infosys from './Infosys.png';
import hackerrank from './Hackerrank.png';
import Phn from './PHN.png';
import coursera_p from './Coursera_python.png';

export default function Certificate() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to trigger the animation earlier or later
  });
  const certificate_list = [
    {
      'cer-name':'DATA ANALYTICS USING PYTHON',
      'authority':'NPTEL',
      'weeks':'12 weeks',
      'score':'78%',
      'img':Certificates
    },
    {
      'cer-name':'Joy of computing Using Python',
      'authority':'NPTEL',
      'weeks':'12 weeks',
      'score':'75%',
      'img':Certificates
    },
    {
      'cer-name':'Internship on Web Dev',
      'authority':'PHN TECHNOLOGIES',
      'weeks':'24 weeks',
      'score':'100%',
      'img':Phn
    },
    {
      'cer-name':'Web Design Cousera',
      'authority':'Coursera',
      'weeks':'6 months',
      'score':'80%',
      'img':Coursera
    },
    {
      'cer-name':'HACKER RANK PYTHON BASIC',
      'authority':'HACKERRANK',
      'weeks':'2 weeks',
      'score':'100%',
      'img':hackerrank
    },
    {
      'cer-name':'Block Chain 101',
      'authority':'Infosys',
      'weeks':'12 weeks',
      'score':'78%',
      'img':infosys
    },
    {
      'cer-name':'Coursera Python',
      'authority':'Coursera',
      'weeks':'4 weeks',
      'score':'78%',
      'img':coursera_p
    }

  ]
  return (
    <>
    <div className={`certificate ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="main-cercard">
        {certificate_list.map((item, index) => (
          <div key={index} className="cercards">
            <div className="card-inner">
              <div className="card-content">
                <img src={item.img} alt="Certificate" className="cercard-img" />
              </div>
              <div className="card-back">
                <div>
                  <h4>{item.authority}</h4>
                  <h4>{item.weeks}</h4>
                  <h4>{item.score}</h4></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
