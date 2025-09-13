// src/components/StrategicPositioning.jsx
import React from "react";
import { Cpu, Shield, Package, Users } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  {
    title: "COTS Engineering Software",
    desc: "Provides standard engineering software solutions for DRDO.",
    color: "bg-green-500",
    icon: <Cpu size={24} />,
  },
  {
    title: "Custom Defense Applications",
    desc: "Develops tailored defense applications to meet DRDO needs.",
    color: "bg-red-500",
    icon: <Shield size={24} />,
  },
  {
    title: "Technology Vendor",
    desc: "Supplies advanced technology solutions to DRDO.",
    color: "bg-sky-500",
    icon: <Package size={24} />,
  },
  {
    title: "Collaborative Partner",
    desc: "Engages in collaborative software development with DRDO.",
    color: "bg-lime-500",
    icon: <Users size={24} />,
  },
];

const StrategicPositioning = () => {
  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-bold mb-10 text-blue-500">
        Aapah's Strategic Positioning
      </h2>

      <div className="flex flex-col space-y-6">
        {roles.map((role, i) => (
          <motion.div
            key={i}
            className={`relative flex items-center text-white rounded-r-full shadow-lg overflow-hidden ${role.color}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, x: 5 }}
          >
            {/* Left Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-black/20">
              {role.icon}
            </div>

            {/* Text */}
            <div className="flex-1 px-6 py-4">
              <h3 className="font-semibold text-lg">{role.title}</h3>
              <p className="text-sm opacity-90">{role.desc}</p>
            </div>

            {/* Arrow Shape */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-inherit clip-arrow"></div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-right mt-10 text-xl font-bold">Aapah's Dual Role</h3>
    </div>
  );
};

export default StrategicPositioning;
