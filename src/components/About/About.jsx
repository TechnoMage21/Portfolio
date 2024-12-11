import React from 'react';
import './About.css';
import { useInView } from 'react-intersection-observer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to trigger the animation earlier or later
  });

  return (
    <div className="about">
      <div
        ref={ref}
        className={`about-section ${inView ? 'animate' : ''}`}
      >
        <h1>About Me</h1>
        <p>
          Hi, I'm Om Gupta, a passionate developer with skills in frontend and
          backend development.
        </p>
        <p>
          I have recently completed my MCA and have experience working with
          various technologies, including React (basic), PHP, and more.
        </p>
        <p>
          I'm always eager to learn new things and take on new challenges.
        </p>

        <div className="about-links">
          <a
            href="https://www.linkedin.com/in/om-gupta-a54747319/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
            aria-label="Visit my LinkedIn profile"
          >
            <LinkedInIcon style={{ marginRight: '8px' }} />
            LinkedIn
          </a>
        </div>

        <a href="/cv.pdf" download className="download-btn" aria-label="Download CV">
          Download CV
        </a>
      </div>
    </div>
  );
}
