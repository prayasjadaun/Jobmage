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

export const createJob = async (jobData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/jobs`, jobData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/jobs`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getJobById = async (jobId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job by ID:', error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/users/${userId}`);
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const changeUserRole = async (userId, newRole) => {
  try {
    await axios.patch(`${API_BASE_URL}/api/users/${userId}`, { role: newRole });
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteJob = async (jobId) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/jobs/${jobId}`);
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const editJob = async (jobId, updatedJob) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/api/jobs/${jobId}`, updatedJob);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
