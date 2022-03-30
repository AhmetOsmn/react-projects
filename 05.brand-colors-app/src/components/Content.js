import LazyLoad from "react-lazyload";
import { useContext } from "react";

import MainContext from "../MainContext";

import Search from "./Search";
import Brand from "./Brand";
import Download from "./Download";
import Loader from "./Loader";

function Content() {
  const { brands, selectedBrands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {brands.map((brand) => (
          // TODO: Placeholder duzenlenecek
          <LazyLoad
            key={brand.slug}
            once={true}
            overflow={true}
            placeholder={<Loader />}
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
}

export default Content;
