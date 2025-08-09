// EmailJS Configuration
export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  userId: process.env.REACT_APP_EMAILJS_USER_ID
};

// Validate environment variables
const missingVars = [];
if (!process.env.REACT_APP_EMAILJS_SERVICE_ID) missingVars.push('REACT_APP_EMAILJS_SERVICE_ID');
if (!process.env.REACT_APP_EMAILJS_TEMPLATE_ID) missingVars.push('REACT_APP_EMAILJS_TEMPLATE_ID');
if (!process.env.REACT_APP_EMAILJS_USER_ID) missingVars.push('REACT_APP_EMAILJS_USER_ID');

if (missingVars.length > 0) {
  console.error('❌ EmailJS environment variables missing:', missingVars.join(', '));
  console.error('📝 Please create a .env.local file with your EmailJS credentials');
  console.error('🔗 Get your credentials from: https://dashboard.emailjs.com/');
} 