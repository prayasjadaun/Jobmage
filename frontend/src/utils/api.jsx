import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409 && error.response.data.error === 'Email already exists') {
      throw new Error('Email already exists');
    } else {
      throw error.response?.data || error.message;
    }
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

