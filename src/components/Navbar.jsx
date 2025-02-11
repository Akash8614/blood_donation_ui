// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-white">
          BloodBank.com
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-red-500 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/donate"
            className="text-white hover:text-red-500 hover:underline"
          >
            Donor
          </Link>
          <Link
            to="/aboutus"
            className="text-white hover:text-red-500 hover:underline"
          >
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
