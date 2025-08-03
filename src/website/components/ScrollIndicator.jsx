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
      const viewportHeight = window.innerHeight;
      
      // Buscar la sección más visible en el viewport
      let bestSectionIndex = -1;
      let bestVisibility = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibility = visibleHeight / Math.min(rect.height, viewportHeight);
        
        if (visibility > bestVisibility && visibility > 0.3) {
          bestVisibility = visibility;
          bestSectionIndex = index;
        }
      });
      
      if (bestSectionIndex !== -1) {
        setCurrentSection(bestSectionIndex);
      } else if (footer) {
        // Si no hay sección visible, verificar el footer
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= navbarHeight + 100) {
          setCurrentSection(-1);
        }
      }
    };

    // Usar throttling para mejorar el rendimiento
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
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
}; 