const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
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
      // Handle token expiration
      if (response.status === 401 && data.code === 'TOKEN_EXPIRED') {
        this.logout();
        throw new Error('Token đã hết hạn, vui lòng đăng nhập lại');
      }
      
      // Handle invalid token
      if (response.status === 401 && (data.code === 'INVALID_TOKEN' || data.code === 'NO_TOKEN')) {
        this.logout();
        throw new Error('Token không hợp lệ, vui lòng đăng nhập lại');
      }
      
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

  // Auth logout
  async logout() {
    try {
      // Call backend logout endpoint if user is authenticated
      if (this.isAuthenticated()) {
        await fetch(`${this.baseURL}/auth/logout`, {
          method: 'POST',
          headers: this.getHeaders()
        });
      }
    } catch (error) {
      console.error('Error calling logout endpoint:', error);
    } finally {
      // Always clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  // Utility methods
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
