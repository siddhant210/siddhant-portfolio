const API_BASE_URL = 'http://localhost:8080/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Health check
  async getHealth() {
    return this.request('/health');
  }

  // Profile data
  async getProfile() {
    return this.request('/profile');
  }

  // Projects data
  async getProjects() {
    return this.request('/projects');
  }

  // Hackathons data
  async getHackathons() {
    return this.request('/hackathons');
  }

  // Contact form submission
  async sendContactMessage(messageData) {
    return this.request('/contact/send', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  }

  // Analytics
  async recordProjectView(projectName) {
    return this.request('/analytics/project-view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `projectName=${encodeURIComponent(projectName)}`,
    });
  }

  async getAnalytics() {
    return this.request('/analytics/dashboard');
  }

  async getProjectViews(projectName) {
    return this.request(`/analytics/project/${encodeURIComponent(projectName)}/views`);
  }

  // Contact messages (admin)
  async getContactMessages() {
    return this.request('/contact/messages');
  }

  async getUnreadMessages() {
    return this.request('/contact/messages/unread');
  }

  async markMessageAsRead(messageId) {
    return this.request(`/contact/messages/${messageId}/read`, {
      method: 'PUT',
    });
  }

  async getUnreadCount() {
    return this.request('/contact/messages/unread/count');
  }
}

export default new ApiService();

