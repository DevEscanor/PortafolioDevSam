import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next'; // Will be used for future translations
import './legal.css';

export const Legal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    const modal = document.getElementById('legalModal');
    if (modal) {
      modal.style.display = 'none';
    }
  };

  const handleModalClick = (e) => {
    if (e.target.id === 'legalModal') {
      closeModal();
    }
  };

  // Escuchar cambios en el estado global
  useEffect(() => {
    const checkModalState = () => {
      const modal = document.getElementById('legalModal');
      if (modal && modal.style.display === 'block') {
        setIsVisible(true);
      }
    };

    // Verificar cada 100ms
    const interval = setInterval(checkModalState, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="legal-modal" id="legalModal" onClick={handleModalClick}>
      <div className="legal-content">
        <div className="legal-header">
          <h2>📄 Información Legal</h2>
          <button 
            className="legal-close"
            onClick={closeModal}
          >
            ×
          </button>
        </div>
        
        <div className="legal-body">
          <section className="legal-section">
            <h3>📋 Licencia MIT</h3>
            <p>
              Este proyecto está bajo la Licencia MIT. Esto significa que puedes:
            </p>
            <ul>
              <li>✅ Usar el código libremente</li>
              <li>✅ Modificar y adaptar el código</li>
              <li>✅ Distribuir el código</li>
              <li>✅ Usar comercialmente</li>
            </ul>
            <p>
              <strong>Requisito:</strong> Mantener el aviso de copyright y la licencia original.
            </p>
            <a 
              href="https://github.com/DevEscanor/PortafolioDevSam/blob/main/LICENSE" 
              target="_blank" 
              rel="noreferrer"
              className="legal-link"
            >
              Ver Licencia Completa →
            </a>
          </section>

          <section className="legal-section">
            <h3>🔒 Privacidad</h3>
            <p>
              Este sitio web no recopila información personal excepto a través del formulario de contacto, 
              que utiliza EmailJS para enviar mensajes. No almacenamos datos personales.
            </p>
          </section>

          <section className="legal-section">
            <h3>📧 Formulario de Contacto</h3>
            <p>
              El formulario de contacto utiliza EmailJS para enviar mensajes. 
              La información enviada se procesa únicamente para responder a tu consulta.
            </p>
          </section>

          <section className="legal-section">
            <h3>🌐 Tecnologías Utilizadas</h3>
            <p>
              Este sitio utiliza React, EmailJS, y otras tecnologías open source. 
              Todas las dependencias tienen sus propias licencias que respetamos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}; 