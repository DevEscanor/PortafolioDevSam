import { useEffect } from 'react';

export const useScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;
    let lastScrollTime = 0;
    const scrollThreshold = 100; // Umbral mínimo para activar scroll snapping
    const scrollCooldown = 500; // Tiempo de espera entre scrolls

    const getCurrentSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const footer = document.querySelector('footer[id]');
      const navbarHeight = 70;
      const viewportHeight = window.innerHeight;
      
      // Buscar la sección más visible en el viewport
      let bestSection = null;
      let bestVisibility = 0;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibility = visibleHeight / Math.min(rect.height, viewportHeight);
        
        if (visibility > bestVisibility && visibility > 0.3) {
          bestVisibility = visibility;
          bestSection = section;
        }
      });
      
      // Si no hay sección visible, verificar el footer
      if (!bestSection && footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top <= navbarHeight + 100) {
          return footer;
        }
      }
      
      return bestSection;
    };

    const scrollToSection = (direction) => {
      const now = Date.now();
      if (isScrolling || (now - lastScrollTime) < scrollCooldown) return;
      
      isScrolling = true;
      lastScrollTime = now;
      
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
        if (currentIndex === sections.length - 1) {
          targetSection = footer;
        } else {
          targetSection = sections[currentIndex + 1];
        }
      } else {
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
      }, 600);
    };

    const handleWheel = (e) => {
      // Solo activar en desktop y cuando el scroll sea significativo
      if (window.innerWidth <= 768) return;
      
      const deltaY = Math.abs(e.deltaY);
      if (deltaY < scrollThreshold) return;
      
      // Permitir scroll natural para movimientos pequeños
      if (deltaY < 150) return;
      
      e.preventDefault();
      
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