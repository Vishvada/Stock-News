import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this if your server is running on a different port or URL

// Create an axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // This is equivalent to credentials: 'include'
});

// Helper function to handle API responses
const handleResponse = (response) => response.data;

// Function to get user's stocks
export const getStocksApi = async () => {
  try {
    const response = await axiosInstance.get('/stocks');
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error.response ? error.response.data : error;
  }
};

// Function to get all available stocks
export const getAllStocksApi = async () => {
  try {
    const response = await axiosInstance.get('/all-stocks');
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching all stocks:', error);
    throw error.response ? error.response.data : error;
  }
};

// Function to add stocks to user's preferred list
export const addStocksApi = async (stockIds) => {
  try {
    const response = await axiosInstance.post('/add-stocks', { stockIds });
    return handleResponse(response);
  } catch (error) {
    console.error('Error adding stocks:', error);
    throw error.response ? error.response.data : error;
  }
};

// Login function
export const loginApi = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return handleResponse(response);
  } catch (error) {
    console.error('Error during login:', error);
    throw error.response ? error.response.data : error;
  }
};

// Signup function
export const signupApi = async (name, email, password) => {
  try {
    const response = await axiosInstance.post('/signup', { name, email, password });
    return handleResponse(response);
  } catch (error) {
    console.error('Error during signup:', error);
    throw error.response ? error.response.data : error;
  }
};

// You can add more API functions here as needed