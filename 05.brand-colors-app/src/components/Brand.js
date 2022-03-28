import React, { useContext } from "react";
import MainContext from "../MainContext";
import { getContrastYIQ } from "../helpers";
import ClipboardButton from "react-clipboard.js";

function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  }

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color) => (
          <ClipboardButton
            component="span"
            data-clipboard-text={color}
            onSuccess={() => setColor(color)}
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            {color}
          </ClipboardButton>
        ))}
      </div>
    </div>
  );
}

export default Brand;
