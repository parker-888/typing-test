// Configuration file for environment variables
// This file should be included before auth.js in your HTML files

// Function to get environment variables from different sources
function getEnvVar(name) {
    // Try to get from window object (for build-time injection)
    if (window[name]) {
        return window[name];
    }
    
    // Try to get from process.env (for Node.js environments)
    if (typeof process !== 'undefined' && process.env && process.env[name]) {
        return process.env[name];
    }
    
    // Try to get from meta tags (for runtime injection)
    const metaTag = document.querySelector(`meta[name="${name}"]`);
    if (metaTag) {
        return metaTag.getAttribute('content');
    }
    
    return '';
}

// Load configuration from environment variables
const config = {
    SUPABASE_URL: getEnvVar('SUPABASE_URL'),
    SUPABASE_ANON_KEY: getEnvVar('SUPABASE_ANON_KEY')
};

// Make config available globally
window.config = config;

// Validate configuration
if (!config.SUPABASE_URL || !config.SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials not found in environment variables. Please check your deployment configuration.');
    console.warn('You can set these via:');
    console.warn('1. Build-time environment variables');
    console.warn('2. Meta tags in HTML head');
    console.warn('3. Window object injection');
}
