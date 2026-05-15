import miniTruckImage from "../assets/mini_truck.webp";
import pickupTruckImage from "../assets/PickupTruck.webp";
import containerTruckImage from "../assets/Container_truck.jpg";
import trailerTruckImage from "../assets/TrailerTruck.jpg";

export const trucks = [
  {
    title: "Mini Trucks (Pickup, Tata Ace)",
    description: "Best for small local loads and doorstep deliveries.",
    price: "₹15 – ₹25 per km",
    image: miniTruckImage,
  },
  {
    title: "Light Commercial Vehicles (3-7 tons)",
    description: "Ideal for medium cargo and regional transport.",
    price: "₹25 – ₹40 per km",
    image: pickupTruckImage,
  },
  {
    title: "Medium/Heavy Trucks (9-15 tons)",
    description: "Designed for larger loads and longer routes.",
    price: "₹30 – ₹50 per km",
    image: containerTruckImage,
  },
  {
    title: "Multi-Axle & Containers (16+ tons)",
    description: "Used for heavy machinery and containerized shipments.",
    price: "₹50 – ₹85+ per km",
    image: trailerTruckImage,
  },
];
