import React from 'react';
import './footer.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const openModal = () => {
    setTimeout(() => {
      const modal = document.getElementById('legalModal');
      if (modal) {
        modal.style.display = 'block';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.zIndex = '999999';
      }
    }, 50);
  };

  return (
    <footer id="Footer" className='footer'>
      <div className="footer-content">
        {/* Sección de Redes Sociales */}
        <div className="social-section">
          <h3>Conecta conmigo</h3>
          <div className="social-links">
            <a 
              href='https://www.linkedin.com/in/david-samuel-suarez-montoya-242059150/' 
              target='_blank' 
              rel="noreferrer"
              className="social-link"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href='https://github.com/DevEscanor' 
              target='_blank' 
              rel="noreferrer"
              className="social-link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href='mailto:david.suarez@arcadiusnic.com' 
              target='_blank' 
              rel="noreferrer"
              className="social-link"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Sección de Información Legal */}
        <div className="legal-section">
          <div className="legal-links">
            <a 
              href="https://github.com/DevEscanor/PortafolioDevSam/blob/main/LICENSE" 
              target="_blank" 
              rel="noreferrer"
              className="license-link"
            >
              📄 MIT License
            </a>
            <button 
              onClick={openModal}
              className="legal-button"
            >
              📋 Información Legal
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <p className='copyright-text'>
            © 2024 <strong>David Suárez</strong> - Software Architect & Full Stack Developer
          </p>
          <p className="footer-subtitle">
            Founder of Veltron Dynamics & Co-founder of Arcadius Nic
          </p>
        </div>
      </div>
    </footer>
  )
};
