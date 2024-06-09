import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
