// API Configuration using environment variables
const API_CONFIG = {
  // Development URLs - Sử dụng production backend cho Zalo Mini App
  development: {
    baseURL: import.meta.env.VITE_API_BASE_URL_DEV || 'https://mini-app-3rwr.onrender.com/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT_DEV) || 10000
  },
  
  // Production URLs
  production: {
    baseURL: import.meta.env.VITE_API_BASE_URL_PROD || 'https://mini-app-3rwr.onrender.com/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT_PROD) || 15000
  },
  
  // Test environment URLs - Sử dụng link production
  test: {
    baseURL: import.meta.env.VITE_API_BASE_URL_TEST || 'https://mini-app-3rwr.onrender.com/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT_TEST) || 15000
  },
  
  // Zalo environment URLs - Sử dụng link production
  zalo: {
    baseURL: import.meta.env.VITE_API_BASE_URL_ZALO || 'https://mini-app-3rwr.onrender.com/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT_ZALO) || 15000
  }
};

// Get current environment
const getCurrentEnvironment = () => {
  // Check if environment is set via environment variable
  const envFromVar = import.meta.env.VITE_DEFAULT_ENVIRONMENT;
  if (envFromVar && ['development', 'production', 'test', 'zalo'].includes(envFromVar)) {
    console.log('Using environment from VITE_DEFAULT_ENVIRONMENT:', envFromVar);
    return envFromVar;
  }
  
  if (typeof window === 'undefined') {
    return 'development';
  }
  
  const hostname = window.location.hostname;
  const href = window.location.href;
  
  console.log('Environment detection:', { hostname, href });
  
  // Check for Zalo environment
  if (hostname.includes('zadn.vn') || hostname.includes('zalo') || href.includes('zalo')) {
    console.log('Detected Zalo environment, using production URL');
    return 'production'; // Will use production URL
  }
  
  // Check for test environment
  if (hostname.includes('test') || hostname.includes('staging') || hostname.includes('dev')) {
    console.log('Detected test environment');
    return 'test';
  }
  
  // Check for production
  if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
    console.log('Detected production environment');
    return 'production';
  }
  
  console.log('Using development environment');
  return 'development';
};

// Get API configuration for current environment
export const getApiConfig = () => {
  const environment = getCurrentEnvironment();
  const config = API_CONFIG[environment];
  
  console.log('API Config:', {
    environment,
    baseURL: config.baseURL,
    timeout: config.timeout,
    currentURL: typeof window !== 'undefined' ? window.location.href : 'N/A',
    envVars: {
      VITE_API_BASE_URL_DEV: import.meta.env.VITE_API_BASE_URL_DEV,
      VITE_API_BASE_URL_PROD: import.meta.env.VITE_API_BASE_URL_PROD,
      VITE_API_BASE_URL_TEST: import.meta.env.VITE_API_BASE_URL_TEST,
      VITE_API_BASE_URL_ZALO: import.meta.env.VITE_API_BASE_URL_ZALO,
      VITE_DEFAULT_ENVIRONMENT: import.meta.env.VITE_DEFAULT_ENVIRONMENT
    }
  });
  
  return config;
};

export default API_CONFIG;
