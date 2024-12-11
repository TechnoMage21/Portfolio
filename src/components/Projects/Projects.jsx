import React from 'react';
import './Project.css';
import ProjectImage1 from './KnowledgeNest.png';
import ProjectImage2 from './Todolist.png';
import ProjectImage3 from './Calculator.png';
import ProjectImage4 from './Timer.png';

const projects = [
  {
    id: 1,
    title: 'KnowledgeNest',
    description: 'This is an Online Library System with Admin as well as Student Portal.(MERN)',
    image: ProjectImage1,
    githubLink: 'https://github.com/dasritu/KnowledgeNest',
  },
  {
    id: 2,
    title: 'ToDoList',
    description: 'Note your Work here for future ,with date and time.(REACT)',
    image: ProjectImage2,
    githubLink: 'https://github.com/dasritu/ToDoList-React',
  },
  {
    id:3,
    title:'Calculator',
    description:'Calculator Using React',
    image:ProjectImage3,
    githubLink:'https://github.com/dasritu/Calculator-React-',
  },
  {
    id:3,
    title:'Timer',
    description:'Timer Using React',
    image:ProjectImage4,
    githubLink:'https://github.com/dasritu/TimerReact',
  }
 
];

export default function Projects() {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
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
