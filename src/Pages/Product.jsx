import { useState } from "react";
import { useParams } from "react-router-dom";
import { LOTS_DATA } from "../data";

const Product = () => {
  const { id } = useParams();
  const lot = LOTS_DATA.find((item) => item.id === id);

  const [bid, setBid] = useState(lot ? lot.currentBid : 0);

  if (!lot) {
    return <h1 style={{ padding: "50px", textAlign: "center" }}>Лот не найден</h1>;
  }

  const calculatedTotal =
    bid +
    lot.costBreakdown.auctionFee +
    lot.costBreakdown.shipping +
    lot.costBreakdown.customs +
    lot.costBreakdown.serviceFee;

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "50px",
      }}
    >
      {/* Фото */}
      <div
        style={{
          border: "1px solid #eee",
          padding: "20px",
          background: "#fafafa",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={lot.image}
          alt={lot.name}
          style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
        />
      </div>

      {/* Информация */}
      <div>
        <h1 style={{ fontSize: "36px", margin: "0 0 10px 0" }}>{lot.name}</h1>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          {lot.auction} • {lot.country}
        </p>

        <hr style={{ borderTop: "1px solid #eee", marginBottom: "25px" }} />

        <h3 style={{ fontSize: "14px", letterSpacing: "2px", marginBottom: "15px" }}>
          ХАРАКТЕРИСТИКИ
        </h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2", fontSize: "15px" }}>
          <li>
            <strong>Двигатель:</strong> {lot.specs.engine}
          </li>
          <li>
            <strong>Пробег:</strong> {lot.specs.mileage}
          </li>
          <li>
            <strong>Повреждения:</strong> {lot.specs.damage}
          </li>
          <li>
            <strong>VIN:</strong> {lot.specs.vin}
          </li>
        </ul>

        <p style={{ marginTop: "20px", color: "#444", fontSize: "14px", lineHeight: "1.5" }}>
          {lot.description}
        </p>

        {/* Калькулятор "Под ключ" */}
        <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #000", background: "#fff" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "15px" }}>РАСЧЁТ "ПОД КЛЮЧ"</h3>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>Ставка на аукционе:</span>
            <input
              type="number"
              value={bid}
              onChange={(e) => setBid(Number(e.target.value))}
              style={{ width: "120px", textAlign: "right" }}
            />{" "}
            $
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px" }}>
            <span>Аукционный сбор:</span>
            <span>${lot.costBreakdown.auctionFee}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px" }}>
            <span>Доставка до РФ:</span>
            <span>${lot.costBreakdown.shipping}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px" }}>
            <span>Таможенные платежи:</span>
            <span>${lot.costBreakdown.customs}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", fontSize: "13px" }}>
            <span>Комиссия сервиса:</span>
            <span>${lot.costBreakdown.serviceFee}</span>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}>
            <span>ИТОГО:</span>
            <span>${calculatedTotal.toLocaleString()}</span>
          </div>
          <a
            href="https://t.me/ваш_ник"
            target="_blank"
            style={{
              display: "block",
              background: "#000",
              color: "#fff",
              textAlign: "center",
              padding: "12px",
              marginTop: "20px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ОСТАВИТЬ ЗАЯВКУ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;