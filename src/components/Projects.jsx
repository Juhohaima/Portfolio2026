import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// komponentit joissa näkyy toteutetut harjoitukset. Sisältää kuvan, kuvauksen, ja mitä ohjelmointitekniikoita on käytetty
const Projects = () => {
  const projectData = [
    {
      title: "Musiikkitapahtuma",
      description: "Ensimmäinen backend-projektini jonka toteutin. Käyttäjä pystyi rekisteröitymään ja kirjautumaan omalle käyttäjällensä, sekä ilmoittautua tapahtumaan. Työn pääosassa oli tietokantojen hallinta ja käyttäjäystävällinen kokemus. Työ on mielestäni parhain mitä olen tehnyt.",
      tech: ["PHP", "SQL", "Backend"],
      image: "/musiikkitapahtumatyo.png",
      live: "https://geronimo.okol.org/~haijuh/musiikkitapahtuma",
      github: "https://github.com/Juhohaima/bandnight"
    },
    {
      title: "Op Pankkilomake",
      description: "OP pankin käyttöliittymää simuloiva lomake. Työssä keskityttiin tarkkaan visuaaliseen viimeistelyyn ja syötteiden validointiin JavaScriptillä.",
      tech: ["HTML", "CSS", "JS"],
      image: "/optyo.png",
      live: "https://geronimo.okol.org/~haijuh/op-main/",
      github: "https://github.com/Juhohaima/op"
    },
    {
      title: "Kotkantien maalaus",
      description: "Ensimmäinen ohjelmoinninharjoitustyö. Toteutin maalauspalveluyritykselle sivuston, jossa oli kuvia tehdyistä maalaustöistä, sekä osio jossa eri maaleja pystyi kokeilemaan kuvan taustalle. On hienoa nähdä oma edistys ohjelmistokehittäjänä",
      tech: ["HTML", "CSS", "JS"],
      image: "/kotkantienmaalaus.png",
      live: "https://geronimo.okol.org/~haijuh/",
      github: "https://github.com/Juhohaima/Kotkantienmaalaus"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title shine-text">Toteutetut harjoitustyöt</h2>
      
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-item-wrapper" key={index}>
            
            {/* korttien yläpuolella olevat kuvausteksti */}
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
  
              <div className="project-meta-wrapper">
    <         div className="project-tech-tags">
             {project.tech.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
            ))}
            </div>

            {project.github && (
           <a href={project.github} target="_blank" rel="noreferrer" className="github-link-icon">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            )}
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