const Lead = require('../models/Lead');
const { validationResult } = require('express-validator');
const axios = require('axios');

// @desc    Get Zalo user info
// @route   POST /api/zalo/user-info
// @access  Public
const getZaloUserInfo = async (req, res) => {
  try {
    const { zaloData, userAgent, ipAddress } = req.body;

    console.log('Zalo data received:', zaloData);
    console.log('User Agent:', userAgent);
    console.log('IP Address:', ipAddress);

    // Validate zaloData
    if (!zaloData || typeof zaloData !== 'object') {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu Zalo không hợp lệ'
      });
    }

    // Extract phone number from various possible fields
    const phoneNumber = extractPhoneNumber(zaloData);
    
    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        message: 'Không tìm thấy số điện thoại trong dữ liệu Zalo',
        debug: {
          availableFields: Object.keys(zaloData),
          zaloData: zaloData
        }
      });
    }

    // Check if lead already exists with this phone number
    const existingLead = await Lead.findOne({ phone: phoneNumber });

    if (existingLead) {
      return res.json({
        success: true,
        message: 'Đã tìm thấy lead với số điện thoại này',
        data: {
          phone: phoneNumber,
          existingLead: {
            id: existingLead._id,
            name: existingLead.name,
            email: existingLead.email,
            status: existingLead.status
          }
        }
      });
    }

    // Return phone number for form pre-fill
    res.json({
      success: true,
      message: 'Lấy thông tin Zalo thành công',
      data: {
        phone: phoneNumber,
        zaloUserId: zaloData.id || zaloData.userId || zaloData.zaloUserId,
        additionalInfo: {
          name: zaloData.name || zaloData.displayName || zaloData.fullName,
          avatar: zaloData.avatar || zaloData.picture || zaloData.photoURL
        }
      }
    });

  } catch (error) {
    console.error('Error getting Zalo user info:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thông tin Zalo',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Create lead from Zalo
// @route   POST /api/zalo/create-lead
// @access  Public
const createLeadFromZalo = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: errors.array()
      });
    }

    const {
      name,
      phone,
      email,
      birthYear,
      qualification,
      country,
      message,
      zaloData,
      userAgent,
      ipAddress
    } = req.body;

    // Check if lead already exists
    const existingLead = await Lead.findOne({
      $or: [
        { phone: phone.trim() },
        { email: email.toLowerCase().trim() }
      ]
    });

    if (existingLead) {
      return res.status(400).json({
        success: false,
        message: 'Lead đã tồn tại với số điện thoại hoặc email này',
        data: {
          leadId: existingLead._id,
          status: existingLead.status
        }
      });
    }

    // Create lead with Zalo info
    const lead = await Lead.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.toLowerCase().trim(),
      birthYear: birthYear ? parseInt(birthYear) : undefined,
      qualification,
      country,
      message: message ? message.trim() : '',
      zaloInfo: {
        phoneFromZalo: phone.trim(),
        zaloUserId: zaloData?.id || zaloData?.userId || zaloData?.zaloUserId,
        zaloAccessToken: zaloData?.accessToken,
        zaloRefreshToken: zaloData?.refreshToken,
        zaloData: zaloData
      },
      source: 'zalo',
      ipAddress: req.ip || ipAddress,
      userAgent: req.get('User-Agent') || userAgent
    });

    res.status(201).json({
      success: true,
      message: 'Tạo lead từ Zalo thành công',
      data: {
        leadId: lead._id,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        status: lead.status,
        createdAt: lead.createdAt,
        zaloInfo: lead.zaloInfo
      }
    });

  } catch (error) {
    console.error('Error creating lead from Zalo:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi tạo lead từ Zalo',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// Helper function to extract phone number from Zalo data
const extractPhoneNumber = (zaloData) => {
  const phoneFields = [
    'phoneNumber',
    'phone',
    'mobile',
    'tel',
    'phone_number',
    'phoneNumberMasked',
    'phoneNumberUnmasked',
    'userPhone',
    'userPhoneNumber',
    'contactPhone',
    'contactPhoneNumber',
    'phoneNumberFormatted',
    'phoneNumberRaw',
    'phoneNumberDisplay'
  ];

  // Check direct fields
  for (const field of phoneFields) {
    if (zaloData[field] && typeof zaloData[field] === 'string') {
      const phone = zaloData[field].trim();
      if (phone && /^[0-9+\-\s()]+$/.test(phone)) {
        return phone;
      }
    }
  }

  // Check nested objects
  if (zaloData.user && zaloData.user.phoneNumber) {
    return zaloData.user.phoneNumber;
  }

  if (zaloData.profile && zaloData.profile.phoneNumber) {
    return zaloData.profile.phoneNumber;
  }

  if (zaloData.contact && zaloData.contact.phoneNumber) {
    return zaloData.contact.phoneNumber;
  }

  // Check if phone is in a nested array or object
  if (zaloData.contacts && Array.isArray(zaloData.contacts)) {
    for (const contact of zaloData.contacts) {
      if (contact.phoneNumber) {
        return contact.phoneNumber;
      }
    }
  }

  return null;
};

// @desc    Process Zalo token to get phone number
// @route   POST /api/zalo/process-token
// @access  Public
const processZaloToken = async (req, res) => {
  try {
    console.log('=== Zalo Token Processing Started ===');
    console.log('Request headers:', req.headers);
    console.log('Request body keys:', Object.keys(req.body || {}));
    
    const { token, userAgent, ipAddress } = req.body;

    console.log('Processing Zalo token:', { 
      token: token ? token.substring(0, 50) + '...' : 'null',
      userAgent, 
      ipAddress 
    });

    if (!token) {
      console.log('No token provided');
      return res.status(400).json({
        success: false,
        message: 'Token không được cung cấp'
      });
    }

    console.log('Attempting to decode token...');
    const phoneNumber = await decodeZaloToken(token);

    if (!phoneNumber) {
      console.log('Failed to decode token - this is expected for test tokens');
      return res.json({
        success: true,
        message: 'Token được nhận nhưng cần token Zalo hợp lệ để lấy số điện thoại',
        data: {
          phone: null,
          token: token.substring(0, 20) + '...',
          timestamp: new Date().toISOString(),
          note: 'Đây là token test. Trong môi trường thực tế, cần token Zalo hợp lệ từ getPhoneNumber()'
        }
      });
    }

    console.log('Successfully decoded phone number:', phoneNumber);

    // Check if lead already exists with this phone number
    const existingLead = await Lead.findOne({ phone: phoneNumber });

    if (existingLead) {
      console.log('Found existing lead:', existingLead._id);
      return res.json({
        success: true,
        message: 'Đã tìm thấy lead với số điện thoại này',
        data: {
          phone: phoneNumber,
          existingLead: {
            id: existingLead._id,
            name: existingLead.name,
            email: existingLead.email,
            status: existingLead.status
          }
        }
      });
    }

    console.log('No existing lead found, returning phone number');
    // Return phone number for form pre-fill
    res.json({
      success: true,
      message: 'Xử lý token Zalo thành công',
      data: {
        phone: phoneNumber,
        token: token.substring(0, 20) + '...',
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('=== Error processing Zalo token ===');
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi xử lý token Zalo',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error',
      debug: process.env.NODE_ENV === 'development' ? {
        stack: error.stack,
        name: error.name
      } : undefined
    });
  }
};

// Helper function to decode Zalo token
const decodeZaloToken = async (token) => {
  try {
    console.log('Processing Zalo token:', token ? token.substring(0, 50) + '...' : 'null');
    
    if (!token || typeof token !== 'string') {
      console.log('Invalid token provided');
      return null;
    }
    
    // Approach 1: Simple regex extraction - look for phone numbers in token
    const phonePatterns = [
      /(\+84|84|0)[0-9]{9,10}/g,  // Vietnamese phone number patterns
      /[0-9]{10,11}/g,            // General phone number patterns
    ];
    
    for (const pattern of phonePatterns) {
      const matches = token.match(pattern);
      if (matches && matches.length > 0) {
        const phoneNumber = matches.reduce((a, b) => a.length > b.length ? a : b);
        if (phoneNumber.length >= 9) {
          console.log('Found phone number in token:', phoneNumber);
          return phoneNumber;
        }
      }
    }
    
    // Approach 2: Try base64 decode
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8');
      console.log('Decoded token:', decoded.substring(0, 100) + '...');
      
      for (const pattern of phonePatterns) {
        const matches = decoded.match(pattern);
        if (matches && matches.length > 0) {
          const phoneNumber = matches.reduce((a, b) => a.length > b.length ? a : b);
          if (phoneNumber.length >= 9) {
            console.log('Found phone number in decoded token:', phoneNumber);
            return phoneNumber;
          }
        }
      }
    } catch (decodeError) {
      console.log('Token is not base64 encoded');
    }
    
    // Approach 3: Use Zalo API with correct parameters
    // According to Zalo docs, the token from getPhoneNumber() needs to be used with specific API
    try {
      const appId = process.env.ZALO_APP_ID;
      const secretKey = process.env.ZALO_APP_SECRET;
      
      if (appId && secretKey) {
        console.log("Trying Zalo API with token...");
        
        // Method 1: Try the standard me/phonenumber endpoint
        try {
          const response = await axios.get("https://graph.zalo.me/v2.0/me/phonenumber", {
            params: {
              access_token: token,
              app_id: appId,
              app_secret: secretKey,
            },
            timeout: 5000,
          });
          
          console.log("Zalo API Response Status:", response.status);
          console.log("Zalo API Response Data:", response.data);
          
          if (response.status === 200 && response.data) {
            // Check if response contains error
            if (response.data.error) {
              console.log("Zalo API returned error:", response.data.error, response.data.message);
              // Continue to next method instead of failing
            } else {
              const phoneNumber = extractPhoneFromZaloResponse(response.data);
              if (phoneNumber) {
                console.log("Successfully extracted phone number from Zalo API:", phoneNumber);
                return phoneNumber;
              }
            }
          }
        } catch (apiError) {
          console.log("Standard Zalo API failed:", apiError.message);
        }
        
        // Method 2: Try with different parameter structure
        try {
          const response = await axios.get("https://graph.zalo.me/v2.0/me/phonenumber", {
            params: {
              access_token: token,
              code: token,
              secret_key: secretKey,
            },
            timeout: 5000,
          });
          
          console.log("Zalo API (Method 2) Response Status:", response.status);
          console.log("Zalo API (Method 2) Response Data:", response.data);
          
          if (response.status === 200 && response.data) {
            // Check if response contains error
            if (response.data.error) {
              console.log("Zalo API Method 2 returned error:", response.data.error, response.data.message);
              // Continue to next method instead of failing
            } else {
              const phoneNumber = extractPhoneFromZaloResponse(response.data);
              if (phoneNumber) {
                console.log("Successfully extracted phone number from Zalo API (Method 2):", phoneNumber);
                return phoneNumber;
              }
            }
          }
        } catch (apiError2) {
          console.log("Zalo API Method 2 failed:", apiError2.message);
        }
        
        // Method 3: Try with headers instead of params
        try {
          const response = await axios.get("https://graph.zalo.me/v2.0/me/phonenumber", {
            headers: {
              'access_token': token,
              'code': token,
              'secret_key': secretKey,
            },
            timeout: 5000,
          });
          
          console.log("Zalo API (Method 3) Response Status:", response.status);
          console.log("Zalo API (Method 3) Response Data:", response.data);
          
          if (response.status === 200 && response.data) {
            // Check if response contains error
            if (response.data.error) {
              console.log("Zalo API Method 3 returned error:", response.data.error, response.data.message);
              // Continue to next method instead of failing
            } else {
              const phoneNumber = extractPhoneFromZaloResponse(response.data);
              if (phoneNumber) {
                console.log("Successfully extracted phone number from Zalo API (Method 3):", phoneNumber);
                return phoneNumber;
              }
            }
          }
        } catch (apiError3) {
          console.log("Zalo API Method 3 failed:", apiError3.message);
        }
        
      } else {
        console.log("Zalo credentials not configured");
      }
    } catch (apiError) {
      console.log("Zalo API failed:", apiError.message);
      if (apiError.response) {
        console.log("Zalo API Error Response:", apiError.response.data);
      }
    }
    
    // Approach 4: Final fallback - extract any numbers
    const numbers = token.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      const longestNumber = numbers.reduce((a, b) => a.length > b.length ? a : b);
      if (longestNumber.length >= 9) {
        console.log('Using final fallback - found number:', longestNumber);
        return longestNumber;
      }
    }
    
    console.log("Could not extract phone number from token");
    return null;
    
  } catch (error) {
    console.error('Error processing token:', error.message);
    return null;
  }
};

// Helper function to extract phone number from Zalo API response
const extractPhoneFromZaloResponse = (zaloData) => {
  try {
    console.log("Extracting phone from Zalo response:", JSON.stringify(zaloData, null, 2));
    
    // Check various possible fields for phone number
    const phoneFields = [
      'phoneNumber',
      'phone',
      'mobile',
      'tel',
      'phone_number',
      'phoneNumberMasked',
      'phoneNumberUnmasked',
      'userPhone',
      'userPhoneNumber',
      'contactPhone',
      'contactPhoneNumber',
      'phoneNumberFormatted',
      'phoneNumberRaw',
      'phoneNumberDisplay',
      'phoneNumberMasked',
      'phoneNumberUnmasked'
    ];
    
    // Check direct fields
    for (const field of phoneFields) {
      if (zaloData[field] && typeof zaloData[field] === 'string') {
        const phone = zaloData[field].trim();
        if (phone && /^[0-9+\-\s()]+$/.test(phone)) {
          console.log(`Found phone number in field '${field}':`, phone);
          return phone;
        }
      }
    }
    
    // Check nested objects
    if (zaloData.data && zaloData.data.phoneNumber) {
      console.log("Found phone number in data.phoneNumber:", zaloData.data.phoneNumber);
      return zaloData.data.phoneNumber;
    }
    
    if (zaloData.user && zaloData.user.phoneNumber) {
      console.log("Found phone number in user.phoneNumber:", zaloData.user.phoneNumber);
      return zaloData.user.phoneNumber;
    }
    
    if (zaloData.profile && zaloData.profile.phoneNumber) {
      console.log("Found phone number in profile.phoneNumber:", zaloData.profile.phoneNumber);
      return zaloData.profile.phoneNumber;
    }
    
    // Check if phone is in a nested array or object
    if (zaloData.contacts && Array.isArray(zaloData.contacts)) {
      for (const contact of zaloData.contacts) {
        if (contact.phoneNumber) {
          console.log("Found phone number in contacts:", contact.phoneNumber);
          return contact.phoneNumber;
        }
      }
    }
    
    // Check for any field that might contain phone number using regex
    const phonePattern = /(\+84|84|0)[0-9]{9,10}/g;
    const searchInObject = (obj, path = '') => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          const currentPath = path ? `${path}.${key}` : key;
          
          if (typeof value === 'string') {
            const matches = value.match(phonePattern);
            if (matches && matches.length > 0) {
              console.log(`Found phone number in ${currentPath}:`, matches[0]);
              return matches[0];
            }
          } else if (typeof value === 'object' && value !== null) {
            const result = searchInObject(value, currentPath);
            if (result) return result;
          }
        }
      }
      return null;
    };
    
    const foundPhone = searchInObject(zaloData);
    if (foundPhone) {
      return foundPhone;
    }
    
    console.log("No phone number found in Zalo response. Available fields:", Object.keys(zaloData));
    return null;
  } catch (error) {
    console.error('Error extracting phone from Zalo response:', error);
    return null;
  }
};

// @desc    Validate Zalo environment
// @route   GET /api/zalo/validate
// @access  Public
const validateZaloEnvironment = async (req, res) => {
  try {
    const { userAgent, url } = req.query;

    const isZaloEnvironment = 
      userAgent?.includes('Zalo') || 
      url?.includes('zalo') ||
      url?.includes('zaloapp') ||
      url?.includes('zalo.me');

    res.json({
      success: true,
      data: {
        isZaloEnvironment,
        userAgent,
        url,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error validating Zalo environment:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi validate Zalo environment',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

module.exports = {
  getZaloUserInfo,
  createLeadFromZalo,
  validateZaloEnvironment,
  processZaloToken
};
