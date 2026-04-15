import React from 'react';
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHtml5, faCss3Alt, faJs, faReact, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* animoitu teksti */}
        <span className="hero-intro">Tervetuloa portfoliooni!</span>

        <div className="hero-main-flex">
          <div className="hero-left">
            <h1>Hei olen Juho!</h1>
            
            <div className="hero-socials">
             
              <a href="/Juho_Haimakainen_CV.pdf" download className="social-icon" aria-label="Lataa CV">
                <FontAwesomeIcon icon={faFile} />
              </a>

              <a href="https://www.linkedin.com/in/juho-haimakainen-25470a381/" target="_blank" className="social-icon" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Juhohaima" target="_blank" className="social-icon" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:juhohaima@gmail.com" target="_blank" className="social-icon" aria-label="Gmail">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>


          <p>
            {/* oikean puoleinen pitempi teksti */}
            Olen 17-vuotias opiskelija Oulusta. Opiskelen OSAO:lla Tieto- ja Viestintätekniikan perustutkintoa, ja tulen valmistumaan ohjelmistokehittäjäksi 2027
          </p>
        </div>
      </div>

      {/* TÄMÄ ON UUSI LISÄYS: Ikonit nurkassa */}
      <div className="tech-stack-corner">
        <FontAwesomeIcon icon={faHtml5} className="tech-lang html" />
        <FontAwesomeIcon icon={faCss3Alt} className="tech-lang css" />
        <FontAwesomeIcon icon={faJs} className="tech-lang js" />
        <FontAwesomeIcon icon={faReact} className="tech-lang react" />
      </div>
    </section>
  );
};

export default Hero;