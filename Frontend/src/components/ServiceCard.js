const ServiceCard = ({ title, description }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={{ marginTop: "10px" }}>Book Now</button>
    </div>
  );
};

export default ServiceCard;