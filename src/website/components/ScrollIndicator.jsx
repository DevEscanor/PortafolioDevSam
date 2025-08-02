import { useEffect, useState } from 'react';
import './ScrollIndicator.css';

export const ScrollIndicator = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['Hero', 'AcercaDe', 'Habilidades', 'Proyectos', 'Contactanos'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const footer = document.querySelector('footer[id]');
      const navbarHeight = 70;
      
      // Buscar en las secciones primero
      const currentSectionIndex = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= navbarHeight + 100 && rect.bottom >= navbarHeight + 100;
      });
      
      if (currentSectionIndex !== -1) {
        setCurrentSection(currentSectionIndex);
      } else if (footer) {
        // Si no estamos en una sección, verificar si estamos en el footer
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= navbarHeight + 100) {
          setCurrentSection(-1); // No mostrar punto activo cuando estés en el footer
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      {sections.map((section, index) => (
        <div
          key={section}
          className={`scroll-dot ${currentSection === index ? 'active' : ''}`}
          onClick={() => {
            const targetSection = document.getElementById(section);
            if (targetSection) {
              const navbarHeight = 70;
              const targetPosition = targetSection.offsetTop - navbarHeight;
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }}
        />
      ))}
    </div>
  );
}; 