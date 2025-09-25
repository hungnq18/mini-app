const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// Security middleware configuration
const securityConfig = {
  // Helmet configuration for security headers
  helmet: helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        scriptSrc: ["'self'"],
        connectSrc: ["'self'"],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),

  // API rate limiting
  apiLimiter: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // requests per window
    message: {
      success: false,
      message: 'Quá nhiều yêu cầu từ IP này, vui lòng thử lại sau 15 phút'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Skip rate limiting for health checks
      return req.path === '/api/health';
    }
  }),

  // Strict rate limiting for auth endpoints
  authLimiter: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // 10 login attempts per 15 minutes
    message: {
      success: false,
      message: 'Quá nhiều lần đăng nhập thất bại, vui lòng thử lại sau 15 phút'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true
  }),

  // Lead creation rate limiting
  leadLimiter: rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // 5 lead creations per minute
    message: {
      success: false,
      message: 'Quá nhiều đăng ký từ IP này, vui lòng thử lại sau 1 phút'
    },
    standardHeaders: true,
    legacyHeaders: false
  })
};

module.exports = securityConfig;
