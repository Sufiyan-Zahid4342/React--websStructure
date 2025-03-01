import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-6">
        Welcome to **E-Shop**, your one-stop destination for the best products at amazing prices. 
        We are committed to providing high-quality products, exceptional customer service, 
        and a seamless shopping experience.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center max-w-4xl">
        {/* Left Side: Image */}
        <img
          src="https://source.unsplash.com/400x300/?business,team"
          alt="Our Team"
          className="rounded-lg shadow-lg"
        />

        {/* Right Side: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mb-4">
            ✅ High-Quality Products <br />
            ✅ Affordable Prices <br />
            ✅ Fast and Secure Shipping <br />
            ✅ 24/7 Customer Support <br />
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
