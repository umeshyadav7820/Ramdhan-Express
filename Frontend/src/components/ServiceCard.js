const ServiceCard = ({ title, description, price, image, onBook }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px",
      width: "260px",
      textAlign: "center",
      boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
      background: "#fff"
    }}>
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "10px" }}
        />
      )}
      <h3 style={{ margin: "16px 0 8px", fontSize: "1.1rem" }}>{title}</h3>
      <p style={{ color: "#555", minHeight: "48px" }}>{description}</p>
      <p style={{ marginTop: "12px", fontWeight: "700", color: "#0B3C5D" }}>Starting from {price}</p>
      <button
        type="button"
        onClick={onBook}
        style={{
          marginTop: "16px",
          background: "#0B3C5D",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "10px 18px",
          cursor: "pointer"
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
