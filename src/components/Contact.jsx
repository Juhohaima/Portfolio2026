import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // formspree
    fetch("https://formspree.io/f/mjgjepva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      setStatus('error');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className="contact-content-wrapper">
          <h2 className="contact-title shine-text">Ota yhteyttä</h2>
          
          {status === 'success' ? (
            <div className="success-container">
              <p className="success-text" style={{ color: '#00abf0', fontSize: '1.2rem', marginBottom: '20px' }}>
                Viesti lähetetty onnistuneesti!
              </p>
              <button onClick={() => setStatus(null)} className="submit-btn">
                Lähetä uusi viesti
              </button>
            </div>
          ) : (
            <>
              <p className="contact-subtitle">
                Ota yhteyttä alla olevalla lomakkeella
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
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

              {/* epäonnistumisviesti */}
                {status === 'error' && (
                  <p style={{ color: '#ff4d4d', marginBottom: '1rem' }}>
                    Lähetys epäonnistui. Tarkista yhteys ja yritä uudelleen.
                  </p>
                )}

                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Lähetetään...' : 'Lähetä viesti'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;