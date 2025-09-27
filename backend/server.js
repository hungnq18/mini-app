const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

// Import database connection
const connectDB = require('./config/database');

// Import routes
const leadRoutes = require('./routes/leadRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const zaloRoutes = require('./routes/zaloRoutes');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Connect to database
connectDB();

const app = express();

// Security middleware
app.use(helmet());

// Optimized rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Increased limit for better UX
  message: {
    success: false,
    message: 'Quá nhiều yêu cầu từ IP này, vui lòng thử lại sau 15 phút'
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests, or Zalo)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:2999',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:2999',
      'https://zaloapp.com',
      'https://zalo.me',
      'https://*.zaloapp.com',
      'https://*.zalo.me',
      'https://h5.zdn.vn',
      'https://*.zdn.vn',
      'https://h5.zadn.vn',
      'https://*.zadn.vn',
      'https://zmp.zalo.me',
      'https://*.zmp.zalo.me',
      'https://h5.zdn.vn/zapps/1396606563538150743',
      'https://h5.zadn.vn/zapps/1396606563538150743',
      'https://zalo.me/s/1396606563538150743',
      process.env.FRONTEND_URL
    ].filter(Boolean);
    
    // Check if origin matches any allowed pattern
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (allowedOrigin.includes('*')) {
        const pattern = allowedOrigin.replace('*', '.*');
        return new RegExp(pattern).test(origin);
      }
      // Exact match
      if (allowedOrigin === origin) {
        return true;
      }
      // Check if origin starts with allowed origin (for Zalo Mini App URLs)
      if (origin.startsWith(allowedOrigin)) {
        return true;
      }
      return false;
    });
    
    if (isAllowed) {
      console.log('CORS allowed origin:', origin);
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      console.log('Available allowed origins:', allowedOrigins);
      callback(new Error('Không được phép bởi CORS policy'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With', 
    'Accept', 
    'Origin',
    'X-Zalo-App-Id',
    'X-Zalo-Version',
    'X-Zalo-Platform',
    'User-Agent'
  ],
  exposedHeaders: ['X-Total-Count', 'X-Page-Count'],
  maxAge: 86400 // 24 hours
};
app.use(cors(corsOptions));

// Additional CORS handling for Zalo Mini App
app.use((req, res, next) => {
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Zalo-App-Id, X-Zalo-Version, X-Zalo-Platform, User-Agent');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Max-Age', '86400');
    return res.status(200).end();
  }
  
  // Add CORS headers to all responses - FORCE ALLOW ZALO
  const origin = req.headers.origin;
  if (origin && (origin.includes('zadn.vn') || origin.includes('zalo'))) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    console.log('CORS: Allowing Zalo origin:', origin);
  } else {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  
  next();
});

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parser
app.use(cookieParser());

// Trust proxy (for rate limiting behind reverse proxy)
app.set('trust proxy', 1);

// Optimized request logging middleware
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip}`);
  }
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: '1.0.1',
    cors: 'updated'
  });
});

// CORS test endpoint
app.get('/api/cors-test', (req, res) => {
  res.json({
    success: true,
    message: 'CORS test successful',
    origin: req.headers.origin,
    timestamp: new Date().toISOString(),
    cors: 'updated'
  });
});

// Zalo proxy endpoint to bypass CORS
app.post('/api/zalo/proxy', (req, res) => {
  // Force CORS headers for Zalo
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Zalo-App-Id, X-Zalo-Version, X-Zalo-Platform, User-Agent');
  
  res.json({
    success: true,
    message: 'Zalo proxy endpoint working',
    origin: req.headers.origin,
    timestamp: new Date().toISOString(),
    cors: 'bypassed'
  });
});

// Zalo JSONP endpoint for CORS bypass
app.get('/api/zalo/jsonp', (req, res) => {
  const callback = req.query.callback || 'callback';
  const data = {
    success: true,
    message: 'Zalo JSONP endpoint working',
    origin: req.headers.origin,
    timestamp: new Date().toISOString(),
    cors: 'jsonp'
  };
  
  res.header('Content-Type', 'application/javascript');
  res.send(`${callback}(${JSON.stringify(data)});`);
});

// Zalo health check endpoint
app.get('/api/zalo/health', (req, res) => {
  res.json({
    success: true,
    message: 'Zalo API is running',
    timestamp: new Date().toISOString(),
    zaloConfig: {
      appId: process.env.ZALO_APP_ID ? 'configured' : 'not configured',
      hasSecret: !!process.env.ZALO_APP_SECRET
    }
  });
});

// API routes
app.use('/api/leads', leadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/zalo', zaloRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Hải Phong Recruitment API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      leads: '/api/leads',
      users: '/api/users',
      auth: '/api/auth',
      zalo: '/api/zalo'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} không tồn tại`
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', err);
  // Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception:', err);
  process.exit(1);
});

module.exports = app;
