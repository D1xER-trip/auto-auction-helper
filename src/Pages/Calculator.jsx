import { useState } from "react";

const Calculator = () => {
  const [carPrice, setCarPrice] = useState(10000);
  const [engineVolume, setEngineVolume] = useState(2000);
  const [total, setTotal] = useState(null);

  const calculate = () => {
    const USD_RUB = 90;
    const priceRub = carPrice * USD_RUB;
    const dutyEstimation = engineVolume * 2.5 * USD_RUB;
    const deliveryFee = 250000;
    const totalRub = priceRub + dutyEstimation + deliveryFee;
    setTotal(Math.round(totalRub));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "50px 20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "20px" }}>КАЛЬКУЛЯТОР СТОИМОСТИ</h1>
      
      <div style={{ border: "1px solid #eee", padding: "30px", borderRadius: "8px" }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Стоимость авто за рубежом ($)
          </label>
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(Number(e.target.value))}
            style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Объем двигателя (куб.см)
          </label>
          <input
            type="number"
            value={engineVolume}
            onChange={(e) => setEngineVolume(Number(e.target.value))}
            style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px" }}
          />
        </div>

        <button
          onClick={calculate}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          РАССЧИТАТЬ
        </button>

        {total && (
          <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f5f5f5", textAlign: "center" }}>
            <div style={{ fontSize: "14px", color: "#666" }}>ИТОГО "ПОД КЛЮЧ":</div>
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>{total.toLocaleString()} ₽</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;  