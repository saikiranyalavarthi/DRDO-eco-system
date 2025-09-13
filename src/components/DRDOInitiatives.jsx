// src/components/DRDOInitiatives.jsx
import React from "react";
import { motion } from "framer-motion";
import { Shield, Bot, Activity, Globe, Wrench, Radio } from "lucide-react";

const aiInitiatives = [
  { icon: <Radio size={24} />, label: "Autonomous Search Robot" },
  { icon: <Shield size={24} />, label: "Air Defence Control System" },
  { icon: <Bot size={24} />, label: "Bipedal Robot" },
  { icon: <Activity size={24} />, label: "Quadruped Robot" },
  { icon: <Globe size={24} />, label: "AI for ISR" },
  { icon: <Wrench size={24} />, label: "AI for Predictive Maintenance" },
];

const quantumFlow = [
  {
    label: "Vulnerable Fiber Optics",
    sub: "Expensive, physically vulnerable",
    color: "from-pink-500 to-purple-500",
  },
  {
    label: "Entangled Photons",
    sub: "Quantum entanglement for secure keys",
    color: "from-indigo-500 to-blue-500",
  },
  {
    label: "Rapid Deployment",
    sub: "Infrastructure-light combat solution",
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Industry Collaboration",
    sub: "Scalability and mass production",
    color: "from-orange-500 to-pink-500",
  },
  {
    label: "Quantum-Secure Communication",
    sub: "Secure comms across domains",
    color: "from-purple-600 to-pink-600",
  },
];

const DRDOInitiatives = () => {
  return (
    <div className="space-y-20 p-8">
      {/* Section 1 - AI Initiatives */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-600">
          Unveiling DRDO's AI and Robotics Initiatives
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Left: Diagram */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 relative">
            {/* Circle */}
            <motion.div
              className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full w-40 h-40 flex items-center justify-center text-center font-semibold shadow-2xl z-10"
              whileHover={{ scale: 1.1 }}
            >
              DRDO’s AI <br /> & Robotics
            </motion.div>

            {/* Line */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-full h-0.5 bg-gray-300 -z-0"></div>

            {/* Fan-out items */}
            <div className="flex flex-col space-y-4 mt-8 md:mt-0 relative z-10">
              {aiInitiatives.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 relative"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  {/* Connector line */}
                  <div className="absolute -left-8 top-1/2 w-8 h-0.5 bg-gray-300"></div>
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Description */}
          <div className="mt-8 md:mt-0 md:w-1/3 text-white leading-relaxed">
            <p className="mb-3">
              DRDO is advancing Artificial Intelligence and Robotics to
              revolutionize defense capabilities. From autonomous robots to
              predictive maintenance systems, AI is being integrated into
              critical technologies to reduce human risk and increase
              operational efficiency.
            </p>
            <p>
              These initiatives highlight India’s commitment to building smart,
              resilient, and adaptive defense platforms capable of operating in
              dynamic combat environments.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 - Quantum Tech */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-500">
          Quantum Key Distribution Breakthrough
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Left: Description */}
          <div className="mb-8 md:mb-0 md:w-1/3 text-white leading-relaxed">
            <p className="mb-3">
              Quantum technologies are redefining secure communication by
              leveraging the laws of physics rather than computational
              complexity. With Quantum Key Distribution (QKD), communication
              channels become virtually unhackable, even against quantum-powered
              adversaries.
            </p>
            <p>
              DRDO’s research focuses on scalable deployment, collaboration with
              industry, and practical solutions for real-world combat scenarios,
              ensuring India remains at the forefront of next-gen secure comms.
            </p>
          </div>

          {/* Right: Quantum Flow */}
          <div className="relative flex justify-center items-center">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -z-0"></div>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {quantumFlow.map((step, i) => (
                <motion.div
                  key={i}
                  className={`relative px-6 py-6 w-52 text-center text-white font-semibold rounded-xl shadow-xl bg-gradient-to-br ${step.color}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div>{step.label}</div>
                  <p className="text-sm font-normal mt-2 opacity-80">
                    {step.sub}
                  </p>

                  {/* Connector line between cards */}
                  {i !== quantumFlow.length - 1 && (
                    <div className="absolute right-[-24px] top-1/2 w-6 h-0.5 bg-gray-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRDOInitiatives;
