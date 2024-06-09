import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 ">
      <div className="container mx-auto text-white text-center">
        <p>&copy; 2023 Sports Store. All rights reserved.</p>
        <a href="/catalog.pdf" download className="text-blue-500">
          Download Catalog
        </a>
        <div className="mt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
