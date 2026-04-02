import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <span className="hero-intro">Tervetuloa portfoliooni!</span>

        <div className="hero-main-flex">
          <div className="hero-left">
            <h1>Hei olen Juho!</h1>
            <div className="hero-socials">
              <a href="#" target="_blank" className="social-icon">LinkedIn</a>
              <a href="#" target="_blank" className="social-icon">GitHub</a>
              <a href="#" target="_blank" className="social-icon">Gmail</a>
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