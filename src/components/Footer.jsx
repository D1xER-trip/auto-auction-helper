import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #eee",
        padding: "80px 50px 40px 50px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "50px",
          marginBottom: "60px",
        }}
      >
        <div>
          <h2
            style={{
              fontWeight: "900",
              fontSize: "20px",
              margin: "0 0 20px 0",
            }}
          >
            CAR / COLLECTION
          </h2>
          <p
            style={{
              color: "#888",
              fontSize: "14px",
              lineHeight: "1.6",
              maxWidth: "300px",
            }}
          >
            Помощь в покупке автомобилей с аукционов США, Японии, кореи и
            доставке в РФ под ключ.
          </p>
        </div>

        <div>
          <h4
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            НАВИГАЦИЯ
          </h4>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Link to="/catalog" style={footerLinkStyle}>
              КАТАЛОГ
            </Link>
            <Link to="/about" style={footerLinkStyle}>
              О ПРОЕКТЕ
            </Link>
            <Link to="/support" style={footerLinkStyle}>
              ПОДДЕРЖКА
            </Link>
          </nav>
        </div>

        <div>
          <h4
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            СВЯЗЬ
          </h4>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <a href="https://t.me/ваш_ник" style={footerLinkStyle}>
              TELEGRAM
            </a>
            <a href="mailto:info@carcollection.ru" style={footerLinkStyle}>
              EMAIL
            </a>
          </nav>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #eee",
          paddingTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "10px",
          color: "#bbb",
          letterSpacing: "1px",
        }}
      >
        <span>© 2026 CAR COLLECTION</span>
        <span>Петропавловск-Камчатский / ДОСТАВКА ПО ВСЕЙ РФ</span>
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  fontSize: "12px",
  color: "#000",
  textDecoration: "none",
  fontWeight: "500",
};

export default Footer;