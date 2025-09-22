import React from "react";
import { Link } from "react-router-dom"; // for page navigation

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0C1A2A] to-[#1C2B3C] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        {/* Left Side Content */}
        <div className="text-center md:text-left">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
            Engineering Reliable Solutions for Critical Industries
          </h1>

          {/* Subtext */}
          <p className="text-blue-300 mb-8 max-w-xl mx-auto md:mx-0">
            Partnering across Aviation, Defence, Railways, and Space— delivering
            rugged electronics and electromechanical assemblies.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            {/* Explore Button */}
            <button className="bg-gradient-to-r from-[#FF7A1A] to-[#FF9E3D] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Explore Verticals
            </button>

            {/* Link to contact page */}
            <Link
              to="/contact"
              className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50/10 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Right Side Image Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/aviation"
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/hero1.jpg"
              alt="Aviation"
              className="object-cover w-full h-40 transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white font-semibold">Aviation</span>
            </div>
          </Link>

          <Link
            to="/defence"
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/hero2.jpg"
              alt="Defence"
              className="object-cover w-full h-40 transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white font-semibold">Defence</span>
            </div>
          </Link>

          <Link
            to="/railways"
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/hero3.jpg"
              alt="Railways"
              className="object-cover w-full h-40 transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white font-semibold">Railways</span>
            </div>
          </Link>

          <Link
            to="/space"
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/hero4.jpg"
              alt="Space"
              className="object-cover w-full h-40 transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white font-semibold">Space</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
