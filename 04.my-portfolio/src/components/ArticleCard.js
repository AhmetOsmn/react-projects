import React from "react";
import { motion } from "framer-motion";

function ArticleCard({ article: { title, description, image, source } }) {
  return (
    <motion.a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl w-full bg-gradient-to-r from-[#586d65] via-[#449164] to-[#ecae67] p-1 hover:cursor-pointer shadow-lg"
      whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.4 } }}
    >
      <div className="w-full h-full p-4 bg-white rounded-lg dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4 ">
          <img
            src={image}
            alt={title}
            className="object-cover w-full rounded-lg max-h-64"
          />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-md">{description}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default ArticleCard;
