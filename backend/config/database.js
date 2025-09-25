const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Log the connection string (without password) for debugging
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI environment variable is not defined');
    }
    
    console.log('Attempting to connect to MongoDB...');
    console.log('Connection string:', mongoUri.replace(/\/\/[^:]+:[^@]+@/, '//***:***@'));
    
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Enable TLS for Atlas (required)
      tls: true,
      tlsAllowInvalidCertificates: false,
      authSource: 'admin',
      retryWrites: true,
      w: 'majority',
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      bufferCommands: false,
      // Additional options to help with connection issues
      maxPoolSize: 10,
      minPoolSize: 1,
      maxIdleTimeMS: 30000
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code
    });
    process.exit(1);
  }
};

module.exports = connectDB;
