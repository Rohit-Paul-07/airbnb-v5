import axios from "axios";
export const API_URL = "https://airbnb-clone-backend-sum8.onrender.com";
const api = axios.create({ baseURL: `${API_URL}/api` });
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default api;
