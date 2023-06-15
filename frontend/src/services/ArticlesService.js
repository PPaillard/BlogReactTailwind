import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const getPosts = () => {
  return axios.get(`${BACKEND_URL}/articles`);
};

const getPostById = (id) => {
  return axios.get(`${BACKEND_URL}/articles/${id}`);
};

export default {
  getPosts,
  getPostById,
};
