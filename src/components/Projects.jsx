import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projectData = [
    {
      title: "Musiikkitapahtuma",
      description: "Ensimmäinen backend-projektini, jossa toteutin käyttäjä pystyi rekisteröitymään ja kirjautumaan omalle käyttäjällensä ja liittyä tapahtumaan. Työssä pääosassa oli tietokantojen hallinta ja käyttäjäystävällinen kokemus. Työ on mielestäni parhain mitä olen tehnyt.",
      tech: ["PHP", "SQL", "Backend"],
      image: "/musiikkitapahtumatyo.png",
      live: "https://geronimo.okol.org/~haijuh/musiikkitapahtuma" 
    },
    {
      title: "Op Pankkilomake",
      description: "OP pankin käyttöliittymää simuloiva lomake. Erityisesti projektissa keskityttiin tarkkaan visuaaliseen viimeistelyyn ja syötteiden validointiin JavaScriptillä.",
      tech: ["JS", "HTML", "CSS"],
      image: "/optyo.png",
      live: "https://geronimo.okol.org/~haijuh/op-main/"
    },
    {
      title: "Kotkantien maalaus",
      description: "Ensimmäinen ohjelmointityöni. Toteutin maalauspalveluyritykselle sivuston, jossa oli kuvia tehdyistä maalaustöistä, sekä osio jossa eri maaleja pystyi kokeilemaan kuvan taustalle. On hienoa nähdä oma edistys ohjelmistokehittäjänä",
      tech: ["HTML", "CSS"],
      image: "/kotkantienmaalaus.png",
      live: "https://geronimo.okol.org/~haijuh/"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title shine-text">Toteutetut harjoitustyöt</h2>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-item-wrapper" key={index}>
            
            {/* Kortin yläpuolella oleva kuvausteksti */}
            <div className="project-top-text">
              <p>{project.description}</p>
            </div>

            <div className="project-card">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;