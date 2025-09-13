// src/components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"; // optional icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">DRDOEcosystem</h3>
          <p className="text-gray-400">
            Innovating & collaborating with DRDO to bring cutting-edge defense
            technologies to life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className="hover:text-purple-400 transition-colors"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors"
              >
                Imported Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>Email: info@drdoecosystem.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: DRDO Campus, India</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DRDOEcosystem. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
