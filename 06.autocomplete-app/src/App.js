import { useEffect, useRef, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(false);
  const [data, setData] = useState([]);
  const searchRef = useRef();

  const isTyping = search.replace(/\s+/, "").length > 0;

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(response => setData(response))
  }, [])

  console.log(data)

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearch("");
    }
  };

  useEffect(() => {
    if (isTyping) {
      const filteredData = data.filter((item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase())
      );
      setResult(filteredData.length > 0 ? filteredData : false);
    } else {
      setResult(false);
    }
  }, [search]);

  return (
    <>
      <div className="search" ref={searchRef}>
        <input
          className={isTyping ? "typing" : null}
          value={search}
          type="text"
          placeholder="Bir ülke ara... (ingilizce)"
          onChange={(e) => setSearch(e.target.value)}
        />
        {isTyping && (
          <div className="search-result">
            {result &&
              result.map((item) => (
                <div key={item.id} className="search-result-item">
                  {item.name.common}
                </div>
              ))}
            {!result && (
              <div className="result-not-found">
                "{search}" için sonuç bulunamadı.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
