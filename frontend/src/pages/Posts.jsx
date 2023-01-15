import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import ArticlesService from "../services/ArticlesService";

const Posts = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await ArticlesService.getArticles();
        console.warn("Get articles : ", response);
        setArticles(response.data);
      } catch (error) {
        console.error("Internal error");
      }
    }
    fetch();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Blog React
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Le blog où on peut retrouver les dernières infos sur la conception
            en <br />
            <span className="font-bold">
              React / Tailwind / Express & Mysql
            </span>
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
