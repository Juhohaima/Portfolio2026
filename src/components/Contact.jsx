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

  const handleSubmit = () => {
    console.log("Lomake lähetetään FormSubmitiin...");
  };

  return (
    <section className="contact-section" id="contact">
      {/* Tämä elementti luo hienon valoefektin taustalle */}
      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className="contact-content-wrapper">
          <h2 className="contact-title shine-text">Ota yhteyttä</h2>
          <p className="contact-subtitle">
            Ota yhteyttä alla olevalla lomakkeella, tai laita minulle suoraan sähköpostia osoitteeseen: juhohaima@gmail.com.
          </p>
          
          <form 
            className="contact-form" 
            action="https://formsubmit.co/juhohaima@gmail.com" 
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Nimesi" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Sähköpostiosoitteesi" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Kirjoita viestisi tähän..." 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Uusi viesti portfoliosta!" />

            <button type="submit" className="submit-btn">
              Lähetä viesti
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;