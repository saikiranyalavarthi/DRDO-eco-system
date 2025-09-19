import React from "react";
import { Link as ScrollLink } from "react-scroll"; // for smooth scrolling
import { Link } from "react-router-dom"; // for page navigation

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Engineering Reliable Solutions for Critical Industries
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Partnering across Aviation, Defence, Railways, and Space—delivering
          rugged electronics and electromechanical assemblies.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Smooth scroll to a section */}
          <ScrollLink
            to="expertise"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition"
          >
            Explore Verticals
          </ScrollLink>

          {/* Link to contact page */}
          <Link
            to="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
