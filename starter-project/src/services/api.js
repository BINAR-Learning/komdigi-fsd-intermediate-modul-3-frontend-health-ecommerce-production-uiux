/**
 * API Client Configuration (STARTER)
 * TODO: Setup axios instance dengan proper configuration
 * 
 * Learning objectives:
 * - Configure axios dengan baseURL
 * - Add request/response interceptors
 * - Handle errors globally
 */

import axios from 'axios';

// TODO 1: Get baseURL from environment variable
// HINT: const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// TODO 2: Create axios instance
// HINT: const apiClient = axios.create({
// HINT:   baseURL,
// HINT:   timeout: 15000,
// HINT:   headers: {
// HINT:     'Content-Type': 'application/json',
// HINT:   },
// HINT: });

// TODO 3: Add request interceptor untuk auth token
// apiClient.interceptors.request.use(
//   (config) => {
//     // TODO: Get token from localStorage
//     // TODO: If token exists, add to Authorization header
//     
//     // HINT: const token = localStorage.getItem('auth_token');
//     // HINT: if (token) {
//     // HINT:   config.headers.Authorization = `Bearer ${token}`;
//     // HINT: }
//     // HINT: return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// TODO 4: Add response interceptor untuk error handling
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // TODO: Handle network errors
//     // TODO: Handle HTTP errors (401, 404, 500, etc.)
//     // TODO: If 401, clear token dan redirect ke login
//     
//     // HINT: if (!error.response) {
//     // HINT:   return Promise.reject({
//     // HINT:     message: 'Cannot connect to server'
//     // HINT:   });
//     // HINT: }
//   }
// );

// TODO 5: Export apiClient
// export default apiClient;

// ==========================================
// USAGE EXAMPLE
// ==========================================

/*
// In any component atau service:
import apiClient from './services/api';

// GET request
const response = await apiClient.get('/api/products');
const products = response.data.data;

// POST request
const response = await apiClient.post('/api/auth/login', {
  email: 'test@example.com',
  password: 'password123'
});

// With query parameters
const response = await apiClient.get('/api/products', {
  params: { category: 'Vitamin' }
});

ERROR HANDLING:

try {
  const response = await apiClient.get('/api/products');
  // Handle success
} catch (error) {
  // Error already formatted by interceptor
  console.error(error.message);
}

NEXT STEPS:
1. Complete TODOs 1-5
2. Test dengan simple GET request
3. Check network tab di DevTools
4. Verify Authorization header added (jika ada token)
5. Compare dengan finished-project
*/

