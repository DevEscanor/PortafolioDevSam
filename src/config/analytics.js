// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Initialize Google Analytics
export const initGA = () => {
  if (isDevelopment) {
    console.log('🔍 Analytics disabled in development mode');
    return;
  }
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: 'David Suárez Portfolio',
      page_location: window.location.href,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (isDevelopment) return;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: 'David Suárez Portfolio'
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (isDevelopment) return;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName, 1);
};

// Track project clicks
export const trackProjectClick = (projectName) => {
  trackEvent('project_click', 'engagement', projectName, 1);
};

// Track technology clicks
export const trackTechnologyClick = (technologyName) => {
  trackEvent('technology_click', 'engagement', technologyName, 1);
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', 'engagement', `scroll_${depth}%`, depth);
};

// Track time on page
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', 'engagement', 'portfolio_visit', seconds);
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', 'engagement', platform, 1);
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent('email_click', 'engagement', 'contact_email', 1);
};

// Track download events (if you add a CV download)
export const trackDownload = (fileType) => {
  trackEvent('download', 'engagement', fileType, 1);
}; 