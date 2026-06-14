const About = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <section style={{ padding: "80px 50px", borderBottom: "1px solid #eee" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          О проекте
        </h1>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ padding: "60px 50px", borderRight: "1px solid #eee" }}>
          <h2
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              color: "#888",
              marginBottom: "30px",
            }}
          >
            НАША МИССИЯ
          </h2>
          <p style={{ fontSize: "24px", lineHeight: "1.4", fontWeight: "500" }}>
            Помогаем покупать автомобили с аукционов США, Японии и кореи с полным
            циклом сопровождения и доставкой до двери.
          </p>
        </div>
        <div
          style={{
            padding: "60px 50px",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.6" }}>
            CarCollection зародился в Петропавловске-Камчатском 
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {[
          { title: "ПОДБОР", desc: "Индивидуальный выбор по вашему бюджету" },
          { title: "ПРОВЕРКА", desc: "Carfax / Autocheck / Аукционные листы" },
          { title: "ЛОГИСТИКА", desc: "Доставка контейнером или Ro-Ro" },
          { title: "ТАМОЖНЯ", desc: "Полное сопровождение и ЭПТС" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              padding: "40px",
              borderRight: index !== 3 ? "1px solid #eee" : "none",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "900",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;