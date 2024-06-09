import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  const backgroundImage = "/bg.jpg"; // Replace with your image URL

  return (
    <>
      <Header />
      <div
        className="p-6 pt-24 h-screen flex flex-col  items-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to the Sports Store
        </h1>
        <p className="text-lg text-white mb-8">
          Discover the best sports gear and accessories.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded shadow-md transform transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 active:bg-blue-700"
        >
          Explore Products
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
