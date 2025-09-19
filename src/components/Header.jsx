import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Appah Innovations
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-600 transition">
            About
          </a>
          <a
            href="/verticals/aviation"
            className="hover:text-blue-600 transition"
          >
            Verticals
          </a>
          <a
            href="/contact"
            className="hover:bg-blue-700 bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <a
              href="/"
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/verticals/aviation"
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Verticals
            </a>
            <a
              href="#contact"
              className="hover:bg-blue-700 bg-blue-600 text-white px-4 py-2 rounded-lg text-center transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
