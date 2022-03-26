import React from "react";
import Layout from "../components/Layout";
import ArrowLeft from "../components/icons/ArrowLeft";
import ArrowRight from "../components/icons/ArrowRight";
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <Layout title={"Portfolyo / Projeler"} description={"My Projects"}>
        <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
          <div className="flex justify-between">
            <a
              href="/"
              className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-8 h-8 fill-current" />
              <span>Ana Sayfa</span>
            </a>
            <a
              href="/articles"
              className="flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <span>Yazılar</span>
              <ArrowRight className="w-8 h-8 fill-current" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Projects;
