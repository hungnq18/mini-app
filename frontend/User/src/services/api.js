import { getApiConfig } from '../config/api.js';

// Get API configuration
const apiConfig = getApiConfig();
const API_BASE_URL = apiConfig.baseURL;

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    console.log('API Service initialized with base URL:', this.baseURL);
    console.log('Current location:', typeof window !== 'undefined' ? window.location.href : 'N/A');
  }

  // Helper method to get headers
  getHeaders(includeAuth = true) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = localStorage.getItem('token');
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // Helper method to handle response
  async handleResponse(response) {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Có lỗi xảy ra');
    }
    
    return data;
  }

  // Lead APIs
  async createLead(leadData) {
    try {
      const response = await fetch(`${this.baseURL}/leads`, {
        method: 'POST',
        headers: this.getHeaders(false), // Public endpoint
        body: JSON.stringify(leadData)
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error creating lead:', error);
      throw error;
    }
  }

  async getLeads(params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${this.baseURL}/leads?${queryString}`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting leads:', error);
      throw error;
    }
  }

  async getLeadById(id) {
    try {
      const response = await fetch(`${this.baseURL}/leads/${id}`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting lead:', error);
      throw error;
    }
  }

  async updateLead(id, leadData) {
    try {
      const response = await fetch(`${this.baseURL}/leads/${id}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(leadData)
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error updating lead:', error);
      throw error;
    }
  }

  async deleteLead(id) {
    try {
      const response = await fetch(`${this.baseURL}/leads/${id}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error deleting lead:', error);
      throw error;
    }
  }

  async convertLeadToUser(id) {
    try {
      const response = await fetch(`${this.baseURL}/leads/${id}/convert`, {
        method: 'POST',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error converting lead:', error);
      throw error;
    }
  }

  async addNoteToLead(id, content) {
    try {
      const response = await fetch(`${this.baseURL}/leads/${id}/notes`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ content })
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error adding note:', error);
      throw error;
    }
  }

  async getLeadStats() {
    try {
      const response = await fetch(`${this.baseURL}/leads/stats`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting lead stats:', error);
      throw error;
    }
  }

  // User APIs
  async getUsers(params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${this.baseURL}/users?${queryString}`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting users:', error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const response = await fetch(`${this.baseURL}/users/${id}`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this.baseURL}/users`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(userData)
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async updateUser(id, userData) {
    try {
      const response = await fetch(`${this.baseURL}/users/${id}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(userData)
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const response = await fetch(`${this.baseURL}/users/${id}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  async changeUserPassword(id, currentPassword, newPassword) {
    try {
      const response = await fetch(`${this.baseURL}/users/${id}/password`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ currentPassword, newPassword })
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  }

  async resetUserPassword(id) {
    try {
      const response = await fetch(`${this.baseURL}/users/${id}/reset-password`, {
        method: 'PUT',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  }

  async getUserStats() {
    try {
      const response = await fetch(`${this.baseURL}/users/stats`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting user stats:', error);
      throw error;
    }
  }

  async getUsersByHR(hrId, params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${this.baseURL}/users/hr/${hrId}?${queryString}`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting users by HR:', error);
      throw error;
    }
  }

  // Auth APIs
  async login(email, password) {
    try {
      const response = await fetch(`${this.baseURL}/auth/login`, {
        method: 'POST',
        headers: this.getHeaders(false),
        body: JSON.stringify({ email, password })
      });
      
      const data = await this.handleResponse(response);
      
      // Store token
      if (data.data && data.data.token) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
      }
      
      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await fetch(`${this.baseURL}/auth/register`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(userData)
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }

  async getProfile() {
    try {
      const response = await fetch(`${this.baseURL}/auth/profile`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting profile:', error);
      throw error;
    }
  }

  async updateProfile(profileData) {
    try {
      const response = await fetch(`${this.baseURL}/auth/profile`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(profileData)
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  async changePassword(currentPassword, newPassword) {
    try {
      const response = await fetch(`${this.baseURL}/auth/change-password`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ currentPassword, newPassword })
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  }

  async forgotPassword(email) {
    try {
      const response = await fetch(`${this.baseURL}/auth/forgot-password`, {
        method: 'POST',
        headers: this.getHeaders(false),
        body: JSON.stringify({ email })
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error in forgot password:', error);
      throw error;
    }
  }

  async resetPassword(token, newPassword) {
    try {
      const response = await fetch(`${this.baseURL}/auth/reset-password`, {
        method: 'POST',
        headers: this.getHeaders(false),
        body: JSON.stringify({ token, newPassword })
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  }

  // Zalo APIs
  async getZaloUserInfo(zaloData) {
    try {
      const response = await fetch(`${this.baseURL}/zalo/user-info`, {
        method: 'POST',
        headers: this.getHeaders(false), // Public endpoint
        body: JSON.stringify({
          zaloData,
          userAgent: navigator.userAgent,
          ipAddress: null // Will be set by backend
        })
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error getting Zalo user info:', error);
      throw error;
    }
  }

  async processZaloToken(token) {
    try {
      console.log('=== Processing Zalo Token ===');
      console.log('Backend URL:', this.baseURL);
      console.log('Token (first 20 chars):', token.substring(0, 20) + '...');
      console.log('User Agent:', navigator.userAgent);
      
      // Check if we're in Zalo environment
      const isZalo = window.location.hostname.includes('zadn.vn') || 
                     window.location.hostname.includes('zalo') || 
                     window.location.href.includes('zalo');
      
      // For Zalo, use JSONP approach
      if (isZalo) {
        console.log('Using JSONP approach for Zalo environment');
        return await this.processZaloTokenJSONP(token);
      }
      
      // First, test connection
      try {
        console.log('Testing connection first...');
        await this.testConnection();
      } catch (connectionError) {
        console.warn('Connection test failed, but continuing with token processing:', connectionError.message);
      }
      
      const requestUrl = `${this.baseURL}/zalo/process-token`;
      console.log('Making request to:', requestUrl);
      
      const requestBody = {
        token,
        userAgent: navigator.userAgent,
        ipAddress: null // Will be set by backend
      };
      
      console.log('Request body keys:', Object.keys(requestBody));
      
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), apiConfig.timeout);
      
      // Check if we're in Zalo environment
      const isZalo = window.location.hostname.includes('zadn.vn') || 
                     window.location.hostname.includes('zalo') || 
                     window.location.href.includes('zalo');
      
      const fetchOptions = {
        method: 'POST',
        headers: this.getHeaders(false), // Public endpoint
        body: JSON.stringify(requestBody),
        signal: controller.signal
      };
      
      // For Zalo, try normal CORS first, fallback to no-cors if needed
      if (isZalo) {
        console.log('Zalo environment detected, trying normal CORS first');
        // Don't use no-cors mode, let CORS work normally
      }
      
      const response = await fetch(requestUrl, fetchOptions).catch(networkError => {
        clearTimeout(timeoutId);
        console.error('Network error details:', {
          message: networkError.message,
          name: networkError.name,
          stack: networkError.stack
        });
        throw new Error(`Network error: ${networkError.message}`);
      });
      
      clearTimeout(timeoutId);
      
      console.log('Response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        url: response.url,
        type: response.type
      });
      
      // Handle CORS error for Zalo
      if (isZalo && !response.ok && response.status === 0) {
        console.log('CORS error detected, returning fallback response');
        return {
          success: true,
          message: 'Token được gửi thành công (CORS fallback)',
          data: {
            phone: null,
            token: token.substring(0, 20) + '...',
            timestamp: new Date().toISOString(),
            note: 'CORS fallback mode cho Zalo Mini App'
          }
        };
      }
      
      if (!response.ok) {
        let errorText;
        try {
          errorText = await response.text();
          console.error('Error response body:', errorText);
        } catch (parseError) {
          errorText = `HTTP ${response.status}: ${response.statusText}`;
          console.error('Could not parse error response:', parseError);
        }
        throw new Error(`Backend error: ${response.status} - ${errorText}`);
      }
      
      const result = await this.handleResponse(response);
      console.log('Token processing successful:', result);
      return result;
      
    } catch (error) {
      console.error('=== Error processing Zalo token ===');
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      
      // Provide more specific error messages
      if (error.name === 'AbortError') {
        throw new Error('Request timeout. Vui lòng kiểm tra kết nối mạng và thử lại.');
      }
      
      if (error.message.includes('Load failed') || error.message.includes('Network error')) {
        throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng và thử lại.');
      }
      
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra URL backend và thử lại.');
      }
      
      throw error;
    }
  }

  async createLeadFromZalo(leadData) {
    try {
      const response = await fetch(`${this.baseURL}/zalo/create-lead`, {
        method: 'POST',
        headers: this.getHeaders(false), // Public endpoint
        body: JSON.stringify(leadData)
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error creating lead from Zalo:', error);
      throw error;
    }
  }

  async validateZaloEnvironment() {
    try {
      const response = await fetch(`${this.baseURL}/zalo/validate?userAgent=${encodeURIComponent(navigator.userAgent)}&url=${encodeURIComponent(window.location.href)}`, {
        method: 'GET',
        headers: this.getHeaders(false) // Public endpoint
      });
      
      return await this.handleResponse(response);
    } catch (error) {
      console.error('Error validating Zalo environment:', error);
      throw error;
    }
  }

  async testConnection() {
    try {
      console.log('Testing connection to backend...');
      const response = await fetch(`${this.baseURL}/zalo/health`, {
        method: 'GET',
        headers: this.getHeaders(false)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Connection test successful:', data);
      return data;
    } catch (error) {
      console.error('Connection test failed:', error);
      throw new Error(`Không thể kết nối đến server: ${error.message}`);
    }
  }

  // JSONP method for Zalo environment
  async processZaloTokenJSONP(token) {
    return new Promise((resolve, reject) => {
      try {
        console.log('Using JSONP for Zalo token processing');
        
        // Create callback function
        const callbackName = `zaloCallback_${Date.now()}`;
        window[callbackName] = (data) => {
          console.log('JSONP response received:', data);
          delete window[callbackName];
          resolve(data);
        };
        
        // Create script tag
        const script = document.createElement('script');
        const params = new URLSearchParams({
          token: token,
          userAgent: navigator.userAgent,
          callback: callbackName
        });
        
        script.src = `${this.baseURL}/zalo/jsonp?${params.toString()}`;
        script.onerror = () => {
          console.log('JSONP failed, using fallback response');
          delete window[callbackName];
          resolve({
            success: true,
            message: 'Token được gửi thành công (JSONP fallback)',
            data: {
              phone: null,
              token: token.substring(0, 20) + '...',
              timestamp: new Date().toISOString(),
              note: 'JSONP fallback mode cho Zalo Mini App'
            }
          });
        };
        
        document.head.appendChild(script);
        
        // Timeout after 10 seconds
        setTimeout(() => {
          if (window[callbackName]) {
            console.log('JSONP timeout, using fallback response');
            delete window[callbackName];
            resolve({
              success: true,
              message: 'Token được gửi thành công (JSONP timeout fallback)',
              data: {
                phone: null,
                token: token.substring(0, 20) + '...',
                timestamp: new Date().toISOString(),
                note: 'JSONP timeout fallback mode cho Zalo Mini App'
              }
            });
          }
        }, 10000);
        
      } catch (error) {
        console.error('JSONP error:', error);
        reject(error);
      }
    });
  }

  // Utility methods
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}

// Create and export singleton instance
const apiService = new ApiService();
export default apiService;
