import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { trucks } from "../data/trucks";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">Our Truck Services</h1>
      <p className="text-gray-600 max-w-3xl">
        Choose the right truck for your cargo. Each option shows the truck photo, name, and minimum booking price.
      </p>

      <div className="flex gap-5 flex-wrap mt-7">
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
