import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">Sports Store</div>
        <div>
          <Link to="/" className="text-white mx-2">
            Home
          </Link>
          <Link to="/products" className="text-white mx-2">
            Products
          </Link>
          <Link to="/about" className="text-white mx-2">
            About Us
          </Link>
          <Link to="/contact" className="text-white mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
