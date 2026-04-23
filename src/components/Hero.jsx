import React, {useState} from 'react';
import SplitText from "./SplitText";
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHtml5, faCss3Alt, faJs, faReact, faTailwindCss } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [copied, setCopied] = useState(false);


  const copyEmail = (e) => {
    e.preventDefault();
    const email = "juhohaima@gmail.com";
    navigator.clipboard.writeText(email);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section className="hero-container">
      <div className="hero-bg-glow-1"></div>
      <div className="hero-bg-glow-2"></div>
      <div className="hero-grid-pattern"></div>

      <div className="hero-content">
        <span className="hero-intro">Tervetuloa portfoliooni!</span>

        <div className="hero-main-flex">
          <div className="hero-left">
            <SplitText
              text="Hei, olen Juho!"
              className="hero-name-text !text-6xl" /* isompi teksti */
              delay={120}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            
            {/* Some ikonit */}
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/juho-haimakainen-25470a381/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a href="https://github.com/Juhohaima" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <div className="email-copy-wrapper">
                <button onClick={copyEmail} className="social-icon" aria-label="Kopioi sähköposti">
                  <FontAwesomeIcon icon={faEnvelope} />
                  {copied && <span className="copy-tooltip">Kopioitu!</span>}
                </button>
              </div>
            </div>

            {/* cv nappi */}
            <div className="hero-actions">
              <a href="https://drive.google.com/file/d/1LID7-MuUnhgeYCNjyMlluJbqwDwHKz_U/view?usp=sharing" target="_blank" rel="noreferrer" className="cv-button">
                <FontAwesomeIcon icon={faFile} /> Katso CV
              </a>
            </div>
          </div>

        {/* pitempi teksti oikealla puolella */}
          <p className="hero-description">
            Olen 17-vuotias opiskelija Oulusta. Opiskelen OSAO:lla Tieto- ja Viestintätekniikan perustutkintoa ja tulen valmistumaan ohjelmistokehittäjäksi 2027.
          </p>
        </div>
      </div>

      <div className="tech-stack-corner">
        <FontAwesomeIcon icon={faHtml5} className="tech-lang html" />
        <FontAwesomeIcon icon={faCss3Alt} className="tech-lang css" />
        <FontAwesomeIcon icon={faJs} className="tech-lang js" />
        <FontAwesomeIcon icon={faReact} className="tech-lang react" />
        <FontAwesomeIcon icon={faTailwindCss} className="tech-lang tailwind" />
      </div>
    </section>
  );
};

export default Hero;