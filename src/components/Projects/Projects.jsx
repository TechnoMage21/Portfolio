import React from 'react';
import './Project.css';
import ProjectImage1 from './KnowledgeNest.png';
import ProjectImage2 from './Todolist.png';
import ProjectImage3 from './Calculator.png';
import ProjectImage4 from './Timer.png';


const projects = [
  {
    id: 1,
    title: 'DoctoPro-DMAS',
    description: 'Data Medical Authentication ensures the integrity and authenticity of medical data within the DoctoPro system',
    image: ProjectImage1,
    githubLink: 'https://github.com/TechnoMage21/DoctoPro',
  },
  {
    id: 2,
    title: 'DoctoCare',
    description: 'People seek online services to consult trusted doctors, receive guidance, and arrange doorstep appointments.',
    image: ProjectImage2,
    githubLink: 'https://github.com/TechnoMage21/DoctoCare',
  },
  {
    id:3,
    title:'Portfolio',
    description:'A portfolio showcasing skills, projects, and achievements, demonstrating expertise and creativity in various fields.',
    image:ProjectImage3,
    githubLink:'https://github.com/TechnoMage21/Portfolio',
  },
  {
    id:3,
    title:'Git Tutorial',
    description:'Welcome to the Git Tutorial! Learn installation, version control, and Git usage with this guide.',
    image:ProjectImage4,
    githubLink:'https://github.com/TechnoMage21/Git_Tutorial',
  }
 
];

export default function Projects() {
  return (
    <div className="projects-section">
      <h2><b>PROJECTS</b></h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
