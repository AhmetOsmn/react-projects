import "./App.css";
import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import Layout from "./components/Layout.js";

import GithubIcon from "./components/icons/Github";
import LinkedinIcon from "./components/icons/Linkedin";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "Never Give Up",
          2000,
          "Full Stack Developer",
          2000,
          ".Net - .Net Core",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);

function App() {
  return (
    <>
      <Layout title={"Portfolyo"} description={"my portfolio"}>
        <main className="w-full h-full">
          <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
            <div className="flex justify-between">
              <div className="flex flex-col items-center justify-center md:items-start">
                <h4 className="text-lg text-gray-800 dark:text-white">
                  <span className="text-xl font-normal">Merhaba,</span> Ben
                </h4>
                <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
                  Ahmet Osman SEZGİN
                </h1>

                <div className="mt-5 text-2xl font-normal tracking-normal text-gray-800 dark:text-white md:text-4xl md:mt-3">
                  <TypingAnimation />
                </div>

                <div className=" flex items-center mt-8 space-x-6 md:mt-4">
                  <motion.a
                    href="https://github.com/AhmetOsmn"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100"
                    whileHover={{ scale: 1.3 }}
                  >
                    <GithubIcon className={"w-16 h-16 fill-current"} />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/ahmetosmanszgn/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100"
                    whileHover={{ scale: 1.3 }}
                  >
                    <LinkedinIcon className={"w-16 h-16 fill-current"} />
                  </motion.a>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/44196434?v=4"
                  alt="Me"
                  className="w-20 h-20 rounded-full mx-auto md:mx-0 md:w-56 md:h-56 md:ml-8 md:mt-8 md:mb-16"
                />
              </div>
            </div>

            <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark">
                <div>
                  <pre>
                    <code className="language-js">
                      <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                        <span>// Portfolio.js </span>
                      </div>
                      <p>
                        Kullandığım ve öğrenmeye devam etmek istediğim teknolojiler:
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="">
                          <p className="text-sm">
                            <span className="text-pink-300 font-bold"> {"> Backend:"} </span> 
                            ["ASP.NET Core", "ASP.NET MVC", "Java Spring"]{" "}
                          </p>
                          <p className="text-sm">
                            <span className="text-pink-300 font-bold"> {"> Frontend:"} </span>
                            ["React", "HTML", "CSS", "JS"]{" "}
                          </p>
                          <p className="text-sm">
                            <span className="text-pink-300 font-bold"> {"> Database:"} </span>
                            ["MSSQL", "MySQL"]{" "}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-8">
                        <a href="/projects">
                          <a className="transition duration-300">Projects</a>
                        </a>
                        <a href="/articles">
                          <a className="transition duration-300">Articles</a>
                        </a>
                      </div>
                    </code>
                  </pre>
                </div>
              </article>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default App;
