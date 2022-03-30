import LazyLoad, { forceVisible } from "react-lazyload";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import MainContext from "./MainContext";
import BrandsData from "./brands.json";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Copied from "./components/Copied";
import Collection from "./components/Collection";
import { forceCheck } from "react-lazyload";

function App() {
  const brandsArray = [];

  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) =>
        brand.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    forceCheck();
  }, [brands]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Content />} />

            <Route path="collection/:slugs" element={<Collection />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
}

export default App;
