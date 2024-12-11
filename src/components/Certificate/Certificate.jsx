import React from 'react';
import './Certificate.css';
import { useInView } from 'react-intersection-observer';

import nptel from './nptel.png';
import Coursera from './Coursera.png';
import webdev from './Coursera_web.png';
import udemy from './udemy.png';
import soft from './softskill.png';
import google from './google.png';
import coursera_p from './unstop.png';

export default function Certificate() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to trigger the animation earlier or later
  });

  const certificate_list = [
    {
      'cer-name': 'Joy of computing Using Python',
      'authority': 'NPTEL',
      'weeks': '12 weeks',
      'score': '72%',
      'img': nptel,
    },
    {
      'cer-name': 'Web Design for Everybody Specialization',
      'authority': 'Coursera',
      'weeks': '8 weeks',
      'score': '95%',
      'img': webdev,
    },
    {
      'cer-name': 'Google IT support Professional',
      'authority': 'Coursera',
      'weeks': '24 weeks',
      'score': '98%',
      'img': google,
    },
    {
      'cer-name': 'Computer Communications',
      'authority': 'Coursera',
      'weeks': '2 months',
      'score': '95%',
      'img': Coursera,
    },
    {
      'cer-name': 'Enhancing soft skills and personality',
      'authority': 'NPTEL',
      'weeks': '8 weeks',
      'score': '63%',
      'img': soft,
    },
    {
      'cer-name': 'Google Gemini A-Z: A Complete Guide on Google Gemini',
      'authority': 'Udemy',
      'weeks': '3 weeks',
      'score': '80%',
      'img': udemy,
    },
    {
      'cer-name': 'Rebel Foods’ EatSure Cloud 2024',
      'authority': 'Unstop',
      'weeks': '3 weeks',
      'score': '70%',
      'img': coursera_p,
    },
  ];

  return (
    
    <div className={`certificate ${inView ? 'animate' : ''}`} ref={ref}>
      <br />
      <h2><b>CERTIFICATES</b></h2>
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
                  <p>{item.weeks}</p>
                  <p>{item.score}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
