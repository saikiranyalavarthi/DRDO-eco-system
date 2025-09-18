import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-gray-900">
          Appah Innovations
        </div>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/verticals/aviation" className="hover:text-blue-600">
            Verticals
          </Link>
          <Link
            to="/contact"
            className="hover:text-white bg-blue-600 px-4 py-2 rounded-lg"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile menu toggle can be added here */}
      </div>
    </header>
  );
}
