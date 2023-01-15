import axios from "axios";
import jwtDecode from "jwt-decode";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const setAxiosToken = (token) => {
  // les requêtes Axios seront désormais paramètrées avec ce token d'auth
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const authenticate = (user) => {
  console.warn("Appel en cours");
  return axios
    .post(`${BACKEND_URL}/login`, user)
    .then((response) => response.data);
};

const isAuthenticated = () => {
  const token = window.localStorage.getItem("token");

  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      setAxiosToken(token);
      return true;
    }
    return false;
  }
  return false;
};

const logout = () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  delete axios.defaults.headers.Authorization;
};

export default {
  authenticate,
  isAuthenticated,
  logout,
};
