import "./App.css";
import { useEffect, useState } from "react";
import MainContext from "./MainContext";
import BrandsData from "./brands.json";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Copied from "./components/Copied";

function App() {

  const brandsArray = [];

  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied
  }

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied}/> }
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
