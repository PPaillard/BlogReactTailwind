import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const getArticles = () => {
  return axios.get(`${BACKEND_URL}/articles`);
};

export default {
  getArticles,
};
