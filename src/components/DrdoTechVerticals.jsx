// src/App.jsx
import React from "react";

const data = [
  {
    label: "Aeronautics",
    key: "Aeronautics",
    labs: ["ADE"],
  },
  {
    label: "Electronics & Communication",
    key: "ElectronicsCommunication",
    labs: ["DEAL", "LRDE"],
  },
  {
    label: "Combat Vehicles",
    key: "CombatVehicles",
    labs: ["CVRDE"],
  },
  {
    label: "Materials",
    key: "Materials",
    labs: ["DMRL", "DMSRDE"],
  },
  {
    label: "Armaments and Ballistics",
    key: "ArmamentsBallistics",
    labs: ["ARDE", "TBRL"],
  },
  {
    label: "Missiles & Strategic Systems",
    key: "MissilesStrategic",
    labs: ["ASL", "DRDL", "RCI"],
  },
  {
    label: "Naval Systems",
    key: "NavalSystems",
    labs: ["NMRL", "NSTL"],
  },
  {
    label: "Life Sciences and Bio-Engineering",
    key: "LifeSciencesBio",
    labs: ["DIPAS", "INMAS"],
  },
];

// 🔵 Node Component
const Node = ({ children, delay }) => (
  <div
    className="bg-purple-500 text-white rounded-md px-4 py-2 min-w-[110px] text-center shadow-md cursor-default select-none animate-fadeInScale"
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

// 🔵 Connectors
const ConnectorVertical = ({ height = "h-6 sm:h-10" }) => (
  <div className={`w-[2px] bg-purple-300 mx-auto ${height}`} />
);

const DrdoTechVerticals = () => (
  <div className="h-[2px] bg-purple-300 w-6 sm:w-10" />
);

const App = () => {
  return (
    <div className="bg-neutral-50 min-h-screen p-6 md:p-12 flex flex-col items-center font-sans">
      <h1 className="text-center text-lg md:text-2xl font-semibold mb-8 text-gray-700">
        DRDO's Technology Verticals and Laboratories
      </h1>

      {/* ✅ Root Node (DRDO) */}
      <div className="flex flex-col items-center">
        <Node delay={100}>DRDO</Node>
        <ConnectorVertical height="h-8 sm:h-12" />
      </div>

      {/* ✅ Branches (Left & Right) */}
      <div className="flex flex-col sm:flex-row gap-12 max-w-7xl w-full justify-center">
        {/* Left Branch */}
        <div className="flex flex-col items-center text-sm sm:text-base space-y-8">
          {data.slice(0, 4).map(({ label, labs }, idx) => (
            <div key={label} className="flex flex-col items-center">
              <Node delay={200 + idx * 150}>{label}</Node>
              <ConnectorHorizontal />
              <div className="flex space-x-4 mt-1">
                {labs.map((lab, i) => (
                  <Node key={lab} delay={300 + idx * 150 + i * 100}>
                    {lab}
                  </Node>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Branch */}
        <div className="flex flex-col items-center text-sm sm:text-base space-y-8">
          {data.slice(4).map(({ label, labs }, idx) => (
            <div key={label} className="flex flex-col items-center">
              <Node delay={200 + idx * 150}>{label}</Node>
              <ConnectorHorizontal />
              <div className="flex space-x-4 mt-1">
                {labs.map((lab, i) => (
                  <Node key={lab} delay={300 + idx * 150 + i * 100}>
                    {lab}
                  </Node>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrdoTechVerticals;
