import { useState } from "react";
import { Link } from "react-router-dom";
import { LOTS_DATA } from "../data";

const Catalog = () => {
  const [sortedData, setSortedData] = useState([...LOTS_DATA]);
  const [countryFilter, setCountryFilter] = useState("all");

  const handleSort = (type) => {
    const sorted = [...sortedData];
    if (type === "cheap") {
      sorted.sort((a, b) => a.currentBid - b.currentBid);
    } else if (type === "expensive") {
      sorted.sort((a, b) => b.currentBid - a.currentBid);
    }
    setSortedData(sorted);
  };

  const handleFilter = (country) => {
    setCountryFilter(country);
    if (country === "all") {
      setSortedData([...LOTS_DATA]);
    } else {
      setSortedData(LOTS_DATA.filter((lot) => lot.country === country));
    }
  };

  return (
    <div style={{ padding: "50px", backgroundColor: "#fff" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ color: "#000", margin: 0 }}>АУКЦИОННЫЕ ЛОТЫ</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => handleFilter("all")} style={btnStyle}>
            ВСЕ
          </button>
          <button onClick={() => handleFilter("USA")} style={btnStyle}>
            США
          </button>
          <button onClick={() => handleFilter("Japan")} style={btnStyle}>
            ЯПОНИЯ
          </button>
          <button onClick={() => handleFilter("Europe")} style={btnStyle}>
            Корея
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "30px",
          gap: "20px",
        }}
      >
        <button onClick={() => handleSort("cheap")} style={btnStyle}>
          СНАЧАЛА ДЕШЕВЛЕ
        </button>
        <button onClick={() => handleSort("expensive")} style={btnStyle}>
          СНАЧАЛА ДОРОЖЕ
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {sortedData.map((lot) => (
          <Link
            to={`/product/${lot.id}`}
            key={lot.id}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #eee",
              padding: "20px",
              transition: "0.2s",
              display: "block",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "#000")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "#eee")}
          >
            <img
              src={lot.image}
              alt={lot.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                background: "#f5f5f5",
              }}
            />
            <h3 style={{ margin: "15px 0 5px 0", fontSize: "18px" }}>
              {lot.name}
            </h3>
            <p style={{ margin: "0", color: "#888", fontSize: "13px" }}>
              {lot.auction} • {lot.country}
            </p>
            <p style={{ margin: "10px 0 0 0", fontWeight: "bold" }}>
              Текущая ставка: ${lot.currentBid.toLocaleString()}
            </p>
            <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#999" }}>
              Итого под ключ: ${lot.costBreakdown.total.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const btnStyle = {
  background: "none",
  border: "1px solid #000",
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "500",
};

export default Catalog;