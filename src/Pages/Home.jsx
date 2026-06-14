const Home = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000" }}>
      <section style={{ padding: "100px 50px", borderBottom: "1px solid #eee" }}>
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "900",
            margin: "0 0 30px 0",
            lineHeight: "1",
          }}
        >
          Автомобили <br />с аукционов США, Японии, Кореи
        </h1>
        <p
          style={{
            maxWidth: "600px",
            fontSize: "18px",
            color: "#444",
            lineHeight: "1.5",
          }}
        >
          Полный цикл: от подбора лота до доставки "под ключ" в РФ. Прозрачный
          расчёт, честные комиссии.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div
          style={{
            padding: "60px 40px",
            borderRight: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "800" }}>АНАЛИТИКА</h2>
          <p style={{ fontSize: "11px", marginTop: "10px", color: "#666" }}>
            РАСЧЁТ СТОИМОСТИ / CARFAX / ПРОГНОЗ РЕМОНТА
          </p>
        </div>
        <div
          style={{
            padding: "60px 40px",
            borderRight: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "800" }}>ЛОГИСТИКА</h2>
          <p style={{ fontSize: "11px", marginTop: "10px", color: "#666" }}>
            КОНТЕЙНЕР / РО-РО / ОТСЛЕЖИВАНИЕ ГРУЗА
          </p>
        </div>
        <div style={{ padding: "60px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800" }}>ТАМОЖНЯ</h2>
          <p style={{ fontSize: "11px", marginTop: "10px", color: "#666" }}>
            РАСЧЁТ ПОШЛИН / ПОДАЧА ДЕКЛАРАЦИЙ / СЕРТИФИКАЦИЯ
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;