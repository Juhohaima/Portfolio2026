import React from 'react';
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <span className="hero-intro">Tervetuloa portfoliooni!</span>

        <div className="hero-main-flex">
          <div className="hero-left">
            <h1>Hei olen Juho!</h1>
            
            <div className="hero-socials">
             
              <a href="#" target="_blank" className="social-icon" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" target="_blank" className="social-icon" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" target="_blank" className="social-icon" aria-label="Gmail">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          <p>
            Olen 17-vuotias opiskelija Oulusta. Opiskelen OSAO:lla Tieto- ja Viestintätekniikan perustutkintoa, ja tulen valmistumaan ohjelmistokehittäjäksi Kesäkuussa 2027.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;