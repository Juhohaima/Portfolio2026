import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projectData = [
    {
      title: "Musiikkitapahtuma",
      tech: ["PHP", "SQL", "Backend"], // Muutettu arrayksi tyylittelyä varten
      image: "/musiikkitapahtumatyo.png",
      live: "https://geronimo.okol.org/~haijuh/musiikkitapahtuma" 
    },
    {
      title: "Op Pankkilomake",
      tech: ["JS", "HTML", "CSS"],
      image: "/optyo.png",
      live: "https://geronimo.okol.org/~haijuh/op-main/"
    },
    {
      title: "Kotkantien maalaus",
      tech: ["HTML", "CSS"],
      image: "/kotkantienmaalaus.png",
      live: "https://geronimo.okol.org/~haijuh/"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      {/* Käytetään samaa shine-efektiä kuin Herossa yhtenäisyyden vuoksi */}
      <h2 className="projects-title shine-text">Toteutetut projektit</h2>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            
            <div className="project-info-box">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-tech-tags">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">       
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="action-link demo">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Vieraile Sivustolla
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;