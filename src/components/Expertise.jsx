import React from "react";
import { Link } from "react-router-dom";

const verticals = [
  {
    title: "Aviation",
    blurb:
      "Avionics integration, cockpit systems, and flight worthy electronics.",
    link: "/verticals/aviation",
    img: "/images/aviation.jpg",
  },
  {
    title: "Defence",
    blurb: "Ruggedized, mission ready solutions for harsh environments.",
    link: "/verticals/defence",
    img: "/images/defence.jpg",
  },
  {
    title: "Railways",
    blurb: "Control systems, signaling interfaces, and onboard electronics.",
    link: "/verticals/railways",
    img: "/images/railways.jpg",
  },
  {
    title: "Space",
    blurb: "Satellite subsystems, ground segment hardware, and test fixtures.",
    link: "/verticals/space",
    img: "/images/space.jpg",
  },
  {
    title: "Aviation & Defence Equipment",
    blurb: "Custom LRUs, enclosures, and test benches.",
    link: "/verticals/aviation-defence-equipments",
    img: "/images/ade.jpg",
  },
  {
    title: "Quality & Compliance",
    blurb: "Standards driven processes and rigorous QA.",
    link: "/verticals/quality-compliance",
    img: "/images/quality.jpg",
  },
  {
    title: "Spare Management",
    blurb: "Lifecycle planning, spares provisioning, obsolescence control.",
    link: "/verticals/spare-management",
    img: "/images/spare.jpg",
  },
  {
    title: "Consultancy",
    blurb: "Design reviews, certification support, reliability engineering.",
    link: "/verticals/consultancy",
    img: "/images/consultancy.jpg",
  },
  {
    title: "Electromechanical Projects",
    blurb: "Racks, cabinets, and field ready assemblies.",
    link: "/verticals/electromechanical-projects",
    img: "/images/electromechanical.jpg",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {verticals.map((v, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={v.img}
                alt={v.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-700 mb-4">{v.blurb}</p>
                <Link to={v.link} className="text-blue-600 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
