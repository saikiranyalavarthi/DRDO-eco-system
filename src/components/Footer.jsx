import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* BUSINESS SEGMENTS */}
        <div>
          <h4 className="font-bold text-white mb-4">BUSINESS SEGMENTS</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/verticals/defence"
                className="hover:text-blue-400 transition"
              >
                Defence & Aerospace
              </Link>
            </li>
            <li>
              <Link
                to="/verticals/people-counting"
                className="hover:text-blue-400 transition"
              >
                People Counting Solution
              </Link>
            </li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-bold text-white mb-4">LINKS</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/news" className="hover:text-blue-400 transition">
                News
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-blue-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/why-choose-us"
                className="hover:text-blue-400 transition"
              >
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:text-blue-400 transition">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-bold text-white mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/vision" className="hover:text-blue-400 transition">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link to="/awards" className="hover:text-blue-400 transition">
                Awards & Recognition
              </Link>
            </li>
            <li>
              <Link to="/milestones" className="hover:text-blue-400 transition">
                Milestones
              </Link>
            </li>
          </ul>
        </div>

        {/* OTHERS */}
        <div>
          <h4 className="font-bold text-white mb-4">MORE</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/customers" className="hover:text-blue-400 transition">
                Customers
              </Link>
            </li>
            <li>
              <Link
                to="/make-in-india"
                className="hover:text-blue-400 transition"
              >
                Make in India
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-blue-400 transition">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/values" className="hover:text-blue-400 transition">
                Values
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-6">
        © 2025 Appah Innovations Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
