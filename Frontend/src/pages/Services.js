import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { trucks } from "../data/trucks";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "12px" }}>Our Truck Services</h1>
      <p style={{ color: "#555", maxWidth: "760px" }}>
        Choose the right truck for your cargo. Each option shows the truck photo, name, and minimum booking price.
      </p>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "28px"
      }}>
        {trucks.map((truck) => (
          <ServiceCard
            key={truck.title}
            title={truck.title}
            description={truck.description}
            price={truck.price}
            image={truck.image}
            onBook={() => navigate("/booking", { state: { vehicle: truck.title } })}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
