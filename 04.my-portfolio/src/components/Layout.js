import React from "react";
// import { HeadProvider, Title, Meta } from "react-head";
import { Helmet } from "react-helmet";

import Header from "./Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <div className="min-h-screen px-3 overflow-hidden bg-primary-light antialiased font-montserrat dark:bg-primary-dark dark:text-white">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
