import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const { t } = useTranslation();

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
          <h3>{t('footer.connectTitle')}</h3>
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
              {t('footer.mitLicense')}
            </a>
            <button 
              onClick={openModal}
              className="legal-button"
            >
              {t('footer.legalInfo')}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <p className='copyright-text'>
            {t('footer.copyright')}
          </p>
          <p className="footer-subtitle">
            {t('footer.subtitle')}
          </p>
        </div>
      </div>
    </footer>
  )
};
