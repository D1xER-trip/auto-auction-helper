import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 50px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: "900",
          fontSize: "18px",
          color: "#000",
          textDecoration: "none",
        }}
      >
        CAR / COLLECTION
      </Link>
      <nav style={{ display: "flex", gap: "30px" }}>
        <Link to="/catalog" style={linkStyle}>
          КАТАЛОГ
        </Link>
        <Link to="/calculator" style={linkStyle}>   
          КАЛЬКУЛЯТОР
        </Link>
        <Link to="/about" style={linkStyle}>
          О ПРОЕКТЕ
        </Link>
        <Link to="/support" style={linkStyle}>
          ПОДДЕРЖКА
        </Link>
      </nav>
    </header>
  );
};

const linkStyle = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#000",
  textDecoration: "none",
  letterSpacing: "1px",
};

export default Header;