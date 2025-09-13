import React from "react";
import { motion } from "framer-motion";

// DRDO Organizational Structure Section with hover & animation

const directorates = [
  {
    title: "Directorate of Industry Interface & Technology Management (DIITM)",
    desc: "Bridges DRDO labs and industry for tech transfer, collaborations and licensing.",
  },
  {
    title: "Directorate of Technology Development Fund (DTDF)",
    desc: "Manages seed funding and supports early-stage technology maturation.",
  },
  {
    title: "Directorate of Information Technology & Cyber Security (DIT&CS)",
    desc: "Oversees information systems, secure infrastructure and cyber defence efforts.",
  },
  {
    title: "Directorate of Finance & Materials Management (DFMM)",
    desc: "Handles budgeting, procurement and material logistics across the organisation.",
  },
];

const labsSummary = [
  { label: "DRDO Labs", value: 41 },
  { label: "DYSLs (Young Scientist Labs)", value: 5 },
  { label: "Corporate Directorates", value: 12 },
];

export default function DrdoOrgSection() {
  return (
    <section className="bg-gray-900 text-gray-100 py-12 px-6 md:px-12 rounded-xl shadow-lg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight hover:text-yellow-400 transition-colors duration-300">
              DRDO — Organizational Structure
            </h2>
            <p className="text-gray-300 mt-2 max-w-2xl">
              The DRDO is a network of {labsSummary[0].value} laboratories,{" "}
              {labsSummary[1].value} DRDO Young Scientist Laboratories (DYSLs),
              and several corporate directorates. The headquarters contains key
              directorates that coordinate technology, finance, cyber security
              and industry engagement.
            </p>
          </div>

          <div className="flex gap-4">
            {labsSummary.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-800/30 p-4 rounded-xl border border-gray-700 min-w-[140px] text-center hover:scale-105 transform transition duration-300"
              >
                <div className="text-2xl font-bold text-yellow-400">
                  {s.value}
                </div>
                <div className="text-sm text-gray-300 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:shadow-yellow-400/10 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              Headquarters Directorates
            </h3>
            <ul className="space-y-3">
              {directorates.map((d, i) => (
                <motion.li
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-gray-900/40 border border-gray-700 hover:border-yellow-400 transition"
                >
                  <h4 className="font-semibold text-lg text-yellow-300 hover:text-yellow-400 transition-colors">
                    {d.title}
                  </h4>
                  <p className="text-gray-300 mt-1 text-sm">{d.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 flex flex-col gap-4 hover:shadow-lg hover:shadow-yellow-400/10 transition"
          >
            <h3 className="text-lg font-semibold">Quick facts</h3>
            <p className="text-gray-300 text-sm">
              The DRDO structure combines research laboratories, young scientist
              initiatives, and corporate directorates to convert research into
              deployable systems and to coordinate with industry and defence
              services.
            </p>

            <div className="mt-2">
              <h4 className="text-sm uppercase text-gray-400 font-medium">
                Highlights
              </h4>
              <ul className="mt-2 text-sm space-y-2">
                <li className="hover:text-yellow-400 transition-colors">
                  • Central coordination through corporate directorates
                </li>
                <li className="hover:text-yellow-400 transition-colors">
                  • Strong industry engagement & tech transfer
                </li>
                <li className="hover:text-yellow-400 transition-colors">
                  • Dedicated funding pathways for tech maturation
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold shadow-md hover:shadow-yellow-400/30 transition"
            >
              Learn more
            </motion.button>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
