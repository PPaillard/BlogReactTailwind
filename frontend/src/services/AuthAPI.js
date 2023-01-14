import axios from "axios";
import jwtDecode from "jwt-decode";

function setAxiosToken(token) {
    // les requêtes Axios seront désormais paramètrées avec ce token d'auth
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function authenticate(credentials) {
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/login`, credentials)
    .then((response) => response.data)
    .then((data) => {
      // Stoker le token et le user dans le local storage
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user", JSON.stringify(data.user));
      // Prevenir Axios du header par défaut pour les futures requetes http
      setAxiosToken(data.token);
      return window.localStorage.getItem("authToken");
    });
}

function isAuthenticated() {
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
}

function logout() {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  delete axios.defaults.headers.Authorization;
}

export default {
  authenticate,
  isAuthenticated,
  logout,
};