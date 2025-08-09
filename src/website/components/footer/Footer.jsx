import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { trackSocialClick, trackEmailClick } from '../../../config/analytics';
import './footer.css';

export const Footer = () => {
  const { t } = useTranslation();

  const openModal = () => {
    const modal = document.getElementById('legalModal');
    if (modal) {
      setTimeout(() => {
        modal.style.display = 'block';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.zIndex = '999999';
      }, 100);
    }
  };

  const handleSocialClick = (platform) => {
    trackSocialClick(platform);
  };

  const handleEmailClick = () => {
    trackEmailClick();
  };

  return (
    <footer id="Footer" className="footer">
      <div className="footer-content">
        {/* Sección de Redes Sociales */}
        <div className="social-section">
          <h3 className="footer-subtitle">{t("footer.connectTitle")}</h3>
          <div className="social-links">
            <a 
              href="https://linkedin.com/in/tu-perfil" 
              target='_blank' 
              rel="noreferrer"
              className="social-link"
              onClick={() => handleSocialClick('linkedin')}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/DevEscanor" 
              target='_blank' 
              rel="noreferrer"
              className="social-link"
              onClick={() => handleSocialClick('github')}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href='mailto:devsamsuarez@gmail.com' 
              target='_blank' 
              rel="noreferrer"
              className="social-link"
              onClick={handleEmailClick}
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
              target='_blank' 
              rel="noreferrer"
              className="legal-link"
            >
              {t("footer.mitLicense")}
            </a>
            <button 
              onClick={openModal}
              className="legal-link"
            >
              {t("footer.legalInfo")}
            </button>
          </div>
        </div>

        {/* Sección de Copyright */}
        <div className="copyright-section">
          <p className="copyright-text">
            {t("footer.copyright")}
          </p>
          <p className="footer-subtitle">
            {t("footer.subtitle")}
          </p>
        </div>
      </div>
    </footer>
  );
};
