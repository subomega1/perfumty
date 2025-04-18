// lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ✅ Move this OUTSIDE of headers
});

export default api;
