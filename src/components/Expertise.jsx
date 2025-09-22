import React from "react";
import { Link } from "react-router-dom";

const verticals = [
  {
    title: "Aviation",
    blurb:
      "Avionics integration, cockpit systems, and flight worthy electronics.",
    link: "/verticals/aviation",
    img: "/images/banner1.jpg",
  },
  {
    title: "Defence",
    blurb: "Ruggedized, mission ready solutions for harsh environments.",
    link: "/verticals/defence",
    img: "/images/banner2.jpg",
  },
  {
    title: "Railways",
    blurb: "Control systems, signaling interfaces, and onboard electronics.",
    link: "/verticals/railways",
    img: "/images/banner3.jpg",
  },
  {
    title: "Space",
    blurb: "Satellite subsystems, ground segment hardware, and test fixtures.",
    link: "/verticals/space",
    img: "/images/banner4.jpg",
  },
  {
    title: "Aviation & Defence Equipment",
    blurb: "Custom LRUs, enclosures, and test benches.",
    link: "/verticals/aviation-defence-equipments",
    img: "/images/banner5.jpg",
  },
  {
    title: "Quality & Compliance",
    blurb: "Standards driven processes and rigorous QA.",
    link: "/verticals/quality-compliance",
    img: "/images/banner6.jpg",
  },
  {
    title: "Spare Management",
    blurb: "Lifecycle planning, spares provisioning, obsolescence control.",
    link: "/verticals/spare-management",
    img: "/images/banner7.jpg",
  },
  {
    title: "Consultancy",
    blurb: "Design reviews, certification support, reliability engineering.",
    link: "/verticals/consultancy",
    img: "/images/banner8.jpg",
  },
  {
    title: "Electromechanical Projects",
    blurb: "Racks, cabinets, and field ready assemblies.",
    link: "/verticals/electromechanical-projects",
    img: "/images/banner9.jpg",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Title with Yellow Underline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Our Expertise
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {verticals.map((v, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-yellow-400/70 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              {/* Image with zoom hover */}
              <div className="overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  className="h-48 w-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400 group-hover:text-yellow-500 transition">
                  {v.title}
                </h3>
                <p className="text-gray-600 mb-4">{v.blurb}</p>

                <Link
                  to={v.link}
                  className="inline-block text-sm font-medium text-yellow-600 group-hover:text-yellow-700 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
