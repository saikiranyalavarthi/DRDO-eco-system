// src/components/SoftwareToolsTable.jsx
import React from "react";

const softwareTools = [
  {
    type: "Commercial (COTS)",
    name: "AutoCAD, SolidWorks, CATIA V5-R20",
    description:
      "Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) tools for design and engineering drawings.",
    other: "Hardware in Loop Simulation (HILS)",
  },
  {
    type: "Indigenous & Mission-Specific",
    name: "Ansys Mechanical, ICEM CFD, Fluent, LS-Dyna, HyperMesh",
    description:
      "Computer-Aided Engineering (CAE) software for Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), and multi-body dynamics simulation.",
    other: "5m Short-span Bridging System",
  },
  {
    type: "Indigenous & Mission-Specific",
    name: "CBRN Hazard prediction software",
    description:
      "Software for predicting Chemical, Biological, Radiological, and Nuclear hazards.",
    other: "Mobile Aerial Masts",
  },
  {
    type: "Indigenous & Mission-Specific",
    name: "INTRUDER software",
    description: "Terrain analysis and infiltration zoning software.",
    other: "PC Based Range Instrument Simulation",
  },
  {
    type: "Indigenous & Mission-Specific",
    name: "SAMPARC Software, KAVASAM Software",
    description: "Counter-COVID-19 technologies.",
    other: "",
  },
  {
    type: "Indigenous & Mission-Specific",
    name: "Video Data Analysis System, PC based Video Tracker",
    description: "Real-time software for processing data from range sensors.",
    other: "",
  },
  {
    type: "Other Systems",
    name: "",
    description:
      "Tool for validating flight hardware and software in an integrated environment.",
    other: "",
  },
  {
    type: "Other Systems",
    name: "",
    description: "Physical engineering system for military mobility.",
    other: "",
  },
  {
    type: "Other Systems",
    name: "",
    description: "Physical system for raising and deploying aerial sensors.",
    other: "",
  },
  {
    type: "Other Systems",
    name: "",
    description:
      "Simulation tool for testing and validating range instrumentation.",
    other: "",
  },
];

const SoftwareToolsTable = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Key COTS and Indigenous Software & Engineering Tools
        </h2>
        <p className="text-gray-300">
          Overview of tools, systems, and descriptions for DRDO collaboration
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Tool Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Tool/System Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Description / Vertical
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Other Systems
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {softwareTools.map((tool, index) => (
              <tr key={index} className="hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 text-gray-200 font-medium">
                  {tool.type}
                </td>
                <td className="px-6 py-4 text-gray-200">{tool.name || "-"}</td>
                <td className="px-6 py-4 text-gray-300">{tool.description}</td>
                <td className="px-6 py-4 text-gray-200">{tool.other || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoftwareToolsTable;
