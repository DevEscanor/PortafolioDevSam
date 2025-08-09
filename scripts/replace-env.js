const fs = require('fs');
const path = require('path');

// Read environment variables
require('dotenv').config({ path: '.env.local' });

// Function to replace placeholders in HTML
function replaceEnvVars() {
  const htmlPath = path.join(__dirname, '../public/index.html');
  
  if (fs.existsSync(htmlPath)) {
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Replace GA tracking ID
    const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
    htmlContent = htmlContent.replace(/%REACT_APP_GA_TRACKING_ID%/g, gaTrackingId);
    
    // Write back to file
    fs.writeFileSync(htmlPath, htmlContent);
    console.log('✅ Environment variables replaced in index.html');
  }
}

// Run replacement
replaceEnvVars(); 