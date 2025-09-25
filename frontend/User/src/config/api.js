// API Configuration
const API_CONFIG = {
  // Development URLs
  development: {
    baseURL: 'http://localhost:5000/api',
    timeout: 10000
  },
  
  // Production URLs
  production: {
    baseURL: 'https://your-production-domain.com/api',
    timeout: 15000
  },
  
  // Test environment URLs - CẬP NHẬT URL TEST CỦA BẠN
  test: {
    baseURL: 'https://your-test-domain.com/api', // THAY ĐỔI URL NÀY
    timeout: 15000
  },
  
  // Zalo environment URLs - SỬ DỤNG URL TEST
  zalo: {
    baseURL: 'https://your-test-domain.com/api', // THAY ĐỔI URL NÀY
    timeout: 15000
  }
};

// Get current environment
const getCurrentEnvironment = () => {
  if (typeof window === 'undefined') {
    return 'development';
  }
  
  const hostname = window.location.hostname;
  const href = window.location.href;
  
  console.log('Environment detection:', { hostname, href });
  
  // Check for Zalo environment
  if (hostname.includes('zadn.vn') || hostname.includes('zalo') || href.includes('zalo')) {
    console.log('Detected Zalo environment, using test URL');
    return 'zalo'; // Will use test URL
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
    currentURL: typeof window !== 'undefined' ? window.location.href : 'N/A'
  });
  
  return config;
};

export default API_CONFIG;
