import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import ArticlesService from "../services/ArticlesService";
import avatarPierre from "../assets/img/avatarPierre.jpg";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await ArticlesService.getPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error("Internal error");
      }
    }
    fetch();
  }, []);

  if (!post) return null;
  return (
    <article className="m-auto p-6 max-w-2xl bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          {post.category_title}
        </span>
        <span className="text-sm">
          {/* Luxon fourni un utilitaire pour créer un objet représentant la date qu'on passe en paramètre du "fromISO", et nous indique la distance relative
          vis à vis de la date / heure du jour actuelle */}
          {DateTime.fromISO(post.created_at).toRelative()}
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {post.content}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src={avatarPierre}
            alt="Pierre Paillard"
          />
          <span className="font-medium dark:text-white">
            {post.firstname} {post.lastname}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
