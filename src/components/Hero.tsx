"use client";

export default function Hero() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      style={{
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <img
        src="/images/react.png"
        alt="Thomas"
        style={{
          width: "20%",
          aspectRatio: "1",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
      />

      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
        Thomas Mullen
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Software Developer
      </h2>
      <p
        style={{ fontSize: "1.5rem", maxWidth: "600px", marginBottom: "2rem" }}
      >
        Full stack developer who loves building clean, user-friendly interfaces.
      </p>

      <button
        onClick={handleScroll}
        style={{
          padding: "0.9rem 2rem",
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "2px solid #000",
          borderRadius: "6px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          transition: "background 0.3s, color 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#000000";
          e.currentTarget.style.color = "#ffffff";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#ffffff";
          e.currentTarget.style.color = "#000000";
        }}
      >
        Visit My Portfolio
        <span style={{ fontSize: "1.25rem" }}>↓</span>
      </button>
    </section>
  );
}
