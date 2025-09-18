import React from "react";
import { Link } from "react-scroll"; // smooth scroll

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Engineering Reliable Solutions for Critical Industries
        </h1>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Partnering across Aviation, Defence, Railways, and Space—delivering
          rugged electronics and electromechanical assemblies.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="expertise"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Explore Verticals
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
