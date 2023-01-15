import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import avatarPierre from "../assets/img/avatarPierre.jpg";

const Article = ({ article }) => {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
          {article.category_title}
        </span>
        <span className="text-sm">
          {/* Luxon fourni un utilitaire pour créer un objet représentant la date qu'on passe en paramètre du "fromISO", et nous indique la distance relative
          vis à vis de la date / heure du jour actuelle */}
          {DateTime.fromISO(article.created_at).toRelative()}
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link to={`/posts/${article.id}`}>{article.title}</Link>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {article.content}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src={avatarPierre}
            alt="Pierre Paillard"
          />
          <span className="font-medium dark:text-white">
            {article.firstname} {article.lastname}
          </span>
        </div>
        <a
          href="sdsd"
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Voir plus
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

Article.propTypes = {};

export default Article;
