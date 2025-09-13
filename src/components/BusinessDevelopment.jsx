// // src/components/BusinessDevelopment.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const funnelSteps = [
//   { label: "Industry Partner Registration", arrow: "Identify Opportunities" },
//   { label: "Respond to Opportunities", arrow: "Respond to Opportunities" },
//   { label: "Establish Key Contacts", arrow: "Establish Key Contacts" },
// ];

// const verticals = [
//   {
//     title: "Aeronautics & Propulsion",
//     description:
//       "Indigenous aircraft subsystems, UAV technologies, gas turbine simulation & testing.",
//   },
//   {
//     title: "Armaments & Ballistics",
//     description:
//       "Materials testing, modelling & validation for small arms, artillery, and protection systems.",
//   },
//   {
//     title: "Electronics, EW & Avionics",
//     description:
//       "Radar, RF systems, electronic warfare, and avionics integration.",
//   },
//   {
//     title: "Missiles & Strategic Systems",
//     description:
//       "Simulation, hardware-in-loop validation, and software for guidance & control.",
//   },
//   {
//     title: "Naval & Combat Vehicles",
//     description: "High-strength steels, composites, and mobility solutions.",
//   },
//   {
//     title: "Life Sciences & Bio-Engineering",
//     description:
//       "Defense medical electronics and biosensors for extreme conditions.",
//   },
//   {
//     title: "Futuristic Technologies",
//     description: (
//       <ul className="list-disc list-inside mt-2">
//         <li>
//           Artificial Intelligence & Robotics – ISR, predictive maintenance,
//           autonomous navigation.
//         </li>
//         <li>
//           Quantum Technologies – secure communications (QKD), quantum
//           processors.
//         </li>
//         <li>
//           Directed Energy Weapons – laser systems, power electronics, and
//           optics.
//         </li>
//       </ul>
//     ),
//   },
// ];

// const BusinessDevelopment = () => {
//   return (
//     <div className="bg-gray-900 min-h-screen p-8 space-y-16 text-white">
//       {/* Title */}
//       <div className="text-center space-y-2">
//         <h1 className="text-3xl font-bold text-white">
//           Business Development With DRDO
//         </h1>
//         <h2 className="text-xl font-medium text-gray-300">
//           Industry Partnership Engagement Process
//         </h2>
//       </div>

//       {/* Funnel Diagram */}
//       <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-12 space-y-8 md:space-y-0">
//         <div className="relative w-72">
//           {funnelSteps.map((step, index) => (
//             <motion.div
//               key={index}
//               className={`bg-purple-700 hover:bg-purple-600 transition-colors text-white rounded-lg text-center py-4 shadow-lg mb-4 relative`}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//             >
//               <span className="font-semibold">{step.label}</span>
//               {/* Arrow */}
//               {index < funnelSteps.length - 1 && (
//                 <div className="absolute right-full top-1/2 transform -translate-y-1/2 pr-4 text-gray-300 text-sm">
//                   {step.arrow}
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//         <div className="text-center mt-4 md:mt-0 font-semibold text-white text-lg">
//           Effective Collaboration
//         </div>
//       </div>

//       {/* DRDO Focus Verticals */}
//       <div className="space-y-6">
//         <h3 className="text-2xl font-bold text-white">
//           Our Focus Verticals with DRDO
//         </h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           {verticals.map((v, i) => (
//             <motion.div
//               key={i}
//               className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//             >
//               <h4 className="font-semibold text-xl mb-2">{v.title}</h4>
//               <div className="text-gray-300">{v.description}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessDevelopment;

// src/components/BusinessDevelopment.jsx
import React from "react";
import { motion } from "framer-motion";

const funnelSteps = [
  { label: "Industry Partner Registration", arrow: "Identify Opportunities" },
  { label: "Respond to Opportunities", arrow: "Respond to Opportunities" },
  { label: "Establish Key Contacts", arrow: "Establish Key Contacts" },
];

const verticals = [
  {
    title: "Aeronautics & Propulsion",
    description:
      "Indigenous aircraft subsystems, UAV technologies, gas turbine simulation & testing.",
  },
  {
    title: "Armaments & Ballistics",
    description:
      "Materials testing, modelling & validation for small arms, artillery, and protection systems.",
  },
  {
    title: "Electronics, EW & Avionics",
    description:
      "Radar, RF systems, electronic warfare, and avionics integration.",
  },
  {
    title: "Missiles & Strategic Systems",
    description:
      "Simulation, hardware-in-loop validation, and software for guidance & control.",
  },
  {
    title: "Naval & Combat Vehicles",
    description: "High-strength steels, composites, and mobility solutions.",
  },
  {
    title: "Life Sciences & Bio-Engineering",
    description:
      "Defense medical electronics and biosensors for extreme conditions.",
  },
  {
    title: "Futuristic Technologies",
    description: (
      <ul className="list-disc list-inside mt-2">
        <li>
          Artificial Intelligence & Robotics – ISR, predictive maintenance,
          autonomous navigation.
        </li>
        <li>
          Quantum Technologies – secure communications (QKD), quantum
          processors.
        </li>
        <li>
          Directed Energy Weapons – laser systems, power electronics, and
          optics.
        </li>
      </ul>
    ),
  },
];

const BusinessDevelopment = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8 space-y-16 text-white">
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">
          Business Development With DRDO
        </h1>
        <h2 className="text-xl font-medium text-gray-300">
          Industry Partnership Engagement Process
        </h2>
      </div>

      {/* Diagonal Funnel Diagram */}
      <div className="relative flex flex-col md:flex-row md:justify-center md:items-center md:space-x-20 space-y-10 md:space-y-0">
        {funnelSteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* Step Box */}
            <div className="bg-purple-700 hover:bg-purple-600 transition-colors text-white rounded-xl text-center py-4 px-6 shadow-lg min-w-[220px]">
              <span className="font-semibold">{step.label}</span>
            </div>

            {/* Arrow connecting steps */}
            {index < funnelSteps.length - 1 && (
              <svg
                className="w-10 h-10 md:w-16 md:h-16 mt-2 md:mt-0 md:absolute md:top-1/2 md:right-[-70px] rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="0" y1="12" x2="24" y2="12" />
                <polyline points="18,6 24,12 18,18" />
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      {/* DRDO Focus Verticals */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">
          Our Focus Verticals with DRDO
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h4 className="font-semibold text-xl mb-2">{v.title}</h4>
              <div className="text-gray-300">{v.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopment;
