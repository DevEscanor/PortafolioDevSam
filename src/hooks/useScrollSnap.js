import { useEffect } from 'react';

export const useScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;

    const getCurrentSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const footer = document.querySelector('footer[id]');
      const navbarHeight = 70;
      
      // Primero buscar en las secciones
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight + 50;
      });
      
      // Si no hay sección actual, verificar si estamos en el footer
      if (!currentSection && footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= navbarHeight + 50) {
          return footer;
        }
      }
      
      return currentSection;
    };

    const scrollToSection = (direction) => {
      if (isScrolling) return;
      
      isScrolling = true;
      
      const sections = document.querySelectorAll('section[id]');
      const footer = document.querySelector('footer[id]');
      const currentSection = getCurrentSection();
      
      if (!currentSection) {
        isScrolling = false;
        return;
      }
      
      const currentIndex = Array.from(sections).indexOf(currentSection);
      let targetSection;
      
      if (direction === 'down') {
        // Si estamos en la última sección, ir al footer
        if (currentIndex === sections.length - 1) {
          targetSection = footer;
        } else {
          targetSection = sections[currentIndex + 1];
        }
      } else {
        // Si estamos en el footer, ir a la última sección
        if (currentSection === footer) {
          targetSection = sections[sections.length - 1];
        } else {
          targetSection = sections[currentIndex - 1];
        }
      }
      
      if (targetSection) {
        const navbarHeight = 70;
        const targetPosition = targetSection.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (Math.abs(e.deltaY) < 50) return; // Ignorar scrolls muy pequeños
      
      if (e.deltaY > 0) {
        scrollToSection('down');
      } else {
        scrollToSection('up');
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        if (e.key === 'ArrowDown') {
          scrollToSection('down');
        } else {
          scrollToSection('up');
        }
      }
    };

    // Solo activar en desktop
    if (window.innerWidth > 768) {
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, []);
}; 