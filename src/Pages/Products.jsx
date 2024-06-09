import React from "react";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Soccer Ball",
      image: "/soccer.jpg",
      description: "High-quality soccer ball.",
    },
    {
      id: 2,
      name: "Basketball",
      image: "/basketball.jpg",
      description: "Durable and reliable basketball.",
    },
    {
      id: 3,
      name: "Tennis Racket",
      image: "/tennis.jpg",
      description: "Lightweight tennis racket for all levels.",
    },
    {
      id: 4,
      name: "Baseball Glove",
      image: "/baseball.jpg",
      description: "Comfortable and flexible baseball glove.",
    },
    {
      id: 5,
      name: "Golf Clubs",
      image: "/golf.jpg",
      description: "Set of golf clubs for beginners and professionals.",
    },
    {
      id: 6,
      name: "Running Shoes",
      image: "/shoes.jpg",
      description: "Comfortable running shoes with great support.",
    },
    {
      id: 7,
      name: "Yoga Mat",
      image: "/mat.jpg",
      description: "Non-slip yoga mat for all types of yoga.",
    },
    {
      id: 8,
      name: "Boxing Gloves",
      image: "/gloves.jpg",
      description: "Durable boxing gloves for training and sparring.",
    },
    {
      id: 9,
      name: "Cycling Helmet",
      image: "/helmet.jpg",
      description: "Safety-first cycling helmet for all riders.",
    },
    {
      id: 10,
      name: "Swimming Goggles",
      image: "/googles.jpg",
      description: "Clear vision swimming goggles with anti-fog coating.",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-6 ">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
