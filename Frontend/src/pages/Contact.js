const Contact = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#0B3C5D]">Owner : Rao Umesh Yadav</h1>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

      <p className="text-lg text-gray-700 mb-4">Phone: <a href="tel:7820092472" className="text-[#0B3C5D] hover:underline">7820092472</a></p>
      <p className="text-lg text-gray-700">Email: <a href="mailto:rao.umesh.2021@gmail.com" className="text-[#0B3C5D] hover:underline">rao.umesh.2021@gmail.com</a></p>
    </div>
  );
};

export default Contact;