import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-4">BUSINESS SEGMENTS</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/verticals/defence" className="hover:text-white">
                Defence & Aerospace
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                People Counting Solution
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">LINKS</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/news" className="hover:text-white">
                News
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/why-choose-us" className="hover:text-white">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/vision" className="hover:text-white">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link to="/awards" className="hover:text-white">
                Awards & Recognition
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        © 2025 Appah Innovations Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
