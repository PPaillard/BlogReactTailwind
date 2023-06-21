import APIService from "./APIService";

const getPosts = () => {
  return APIService.get(`/articles`);
};

const getPostById = (id) => {
  return APIService.get(`/articles/${id}`);
};

export default {
  getPosts,
  getPostById,
};
