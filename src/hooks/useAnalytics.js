import { useEffect, useRef } from 'react';
import { 
  initGA, 
  trackPageView, 
  trackScrollDepth, 
  trackTimeOnPage,
  trackEvent 
} from '../config/analytics';

export const useAnalytics = () => {
  const startTime = useRef(Date.now());
  const lastScrollDepth = useRef(0);

  // Initialize GA on mount
  useEffect(() => {
    initGA();
  }, []);

  // Track initial page view
  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && lastScrollDepth.current < milestone) {
          trackScrollDepth(milestone);
          lastScrollDepth.current = milestone;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track time on page
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      if (timeSpent > 10) { // Only track if spent more than 10 seconds
        trackTimeOnPage(timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Custom tracking functions
  const trackProjectView = (projectName) => {
    trackEvent('project_view', 'engagement', projectName, 1);
  };

  const trackSectionView = (sectionName) => {
    trackEvent('section_view', 'engagement', sectionName, 1);
  };

  const trackContactAttempt = (method) => {
    trackEvent('contact_attempt', 'engagement', method, 1);
  };

  const trackLanguageChange = (language) => {
    trackEvent('language_change', 'engagement', language, 1);
  };

  const trackThemeToggle = (theme) => {
    trackEvent('theme_toggle', 'engagement', theme, 1);
  };

  return {
    trackProjectView,
    trackSectionView,
    trackContactAttempt,
    trackLanguageChange,
    trackThemeToggle
  };
}; 