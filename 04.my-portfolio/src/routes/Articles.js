import React from "react";
import Layout from "../components/Layout";
import ArrowLeft from "../components/icons/ArrowLeft";
import ArrowRight from "../components/icons/ArrowRight";
import articles from "../articles.json";
import ArticleCard from "../components/ArticleCard";

function Articles() {
  return (
    <>
      <Layout title={"Portfolyo / Yazılar"} description={"My Articles"}>
        <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
          <div className="flex justify-between">
            <a
              href="/projects"
              className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-8 h-8 fill-current" />
              <span>Projeler</span>
            </a>
            <a
              href="/"
              className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <span>Ana Sayfa</span>
              <ArrowRight className="w-8 h-8 fill-current" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Articles;
