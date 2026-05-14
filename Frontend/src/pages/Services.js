import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div style={{ padding: "20px" }}>
      
      <h1>Our Services</h1>
      <p>Choose the best transport option with Ramdhan Express</p>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>

        <ServiceCard
          title="Mini Truck"
          description="Best for small deliveries and local transport."
        />

        <ServiceCard
          title="Full Truck"
          description="Suitable for heavy goods and long-distance transport."
        />

        <ServiceCard
          title="Packers & Movers"
          description="Safe shifting for home and office relocation."
        />

      </div>

    </div>
  );
};

export default Services;