// EmailJS Configuration
export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ubwrvbp',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_jxwbzcl',
  userId: process.env.REACT_APP_EMAILJS_USER_ID || 'qkRqCIXlHbHdQXhvL'
};

// Validate environment variables in production
if (process.env.NODE_ENV === 'production') {
  if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
      !process.env.REACT_APP_EMAILJS_USER_ID) {
    console.warn('⚠️ EmailJS environment variables not set in production!');
  }
} 