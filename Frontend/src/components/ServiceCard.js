const ServiceCard = ({ title, description, price, image, onBook }) => {
  return (
    <div className="border border-gray-300 p-5 rounded-lg w-64 text-center shadow-md hover:shadow-lg transition bg-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
      )}
      <h3 className="my-4 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 min-h-12">{description}</p>
      <p className="mt-3 font-bold text-[#0B3C5D]">Starting from {price}</p>
      <button
        type="button"
        onClick={onBook}
        className="mt-4 bg-[#0B3C5D] text-white border-none rounded-lg px-4.5 py-2.5 cursor-pointer hover:bg-[#09304d] transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
