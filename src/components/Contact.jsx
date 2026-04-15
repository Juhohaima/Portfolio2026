import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Jos käytät FormSubmitia suoraan 'action'-attribuutilla, 
  // emme käytä e.preventDefaultia, jotta sivu voi ohjautua FormSubmitin kiitossivulle.
  // Jos haluat käsitellä lähetyksen täysin Reactilla (ilman sivun latausta), se vaatisi 'fetch'-kutsun.
  const handleSubmit = () => {
    console.log("Lomake lähetetään FormSubmitiin...");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title shine-text">Yhteydenotto</h2>
        <p className="contact-subtitle">Jätä yhteystietosi ja viestisi!</p>
        
        {/* LISÄTTY action JA method TÄHÄN LOMAKKEESEEN */}
        <form 
          className="contact-form" 
          action="https://formsubmit.co/juhohaima@gmail.com" 
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* FormSubmit tarvitsee nämä nimeämiset (name="name" jne.), jotka sinulla onkin jo kunnossa */}
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Nimi" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Sähköposti" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Viesti..." 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Voit lisätä halutessasi spämmisuojan ja hienosäätöjä: */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Uusi viesti portfoliosta!" />

          <button type="submit" className="submit-btn">Lähetä viesti</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;