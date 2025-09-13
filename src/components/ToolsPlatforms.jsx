// src/components/ToolsPlatforms.jsx
import React from "react";
import { motion } from "framer-motion";

const toolsPlatforms = [
  {
    type: "Commercial (COTS) Tools",
    description:
      "Aapah provides both COTS engineering software and custom-built defense applications, matching DRDO’s workflow.",
  },
  {
    type: "Indigenous / Mission-Specific Tools",
    description: (
      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
        <li>Simulation & Analysis: Fluent, ICEM CFD</li>
        <li>
          CAD/CAE: AutoCAD, SolidWorks, CATIA, Ansys (Mechanical, CFD, LS-Dyna,
          Hyper Mesh)
        </li>
        <li>Video Data Analysis & Tracking Systems</li>
        <li>INTRUDER – Terrain Analysis</li>
        <li>CBRN Hazard Prediction Software</li>
        <li>Hardware-in-Loop Simulation (HILS) for flight systems</li>
      </ul>
    ),
  },
];

const ToolsPlatforms = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 space-y-12">
      {/* Section Title */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Tools & Platforms</h2>
        <p className="text-gray-300 text-lg">
          As Aapah, we leverage tools & platforms to support DRDO workflows.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {toolsPlatforms.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-all transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{tool.type}</h3>
            <p className="text-gray-300">{tool.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-400 mt-8">
        This dual capability positions Aapah as both a technology vendor and a
        collaborative software development partner.
      </div>
    </div>
  );
};

export default ToolsPlatforms;
