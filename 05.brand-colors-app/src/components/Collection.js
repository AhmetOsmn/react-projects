import React, { useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { GrLinkPrevious } from "react-icons/gr";

import MainContext from "../MainContext";

import Brand from "./Brand";
import Download from "./Download";
import Loader from "./Loader";

function Collection() {
  const { slugs } = useParams();
  const navigate = useNavigate();
  const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    navigate("/");
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back-btn">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}

export default Collection;
