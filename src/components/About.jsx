import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/aboutimage.jpg"
            alt="About Us"
            className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
          />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fadeInUp">
              About <span className="text-yellow-500">Us</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mt-3 rounded-full animate-fadeInUp delay-75"></div>
          </div>

          <p className="text-gray-700 leading-relaxed animate-fadeInUp delay-100">
            <span className="font-semibold text-gray-900">
              Appah Innovations Pvt. Ltd.
            </span>{" "}
            engineers
            <span className="text-yellow-600 font-medium">
              {" "}
              reliable, rugged solutions
            </span>{" "}
            for demanding environments. We design and build avionics and
            mission-critical electronics, rail control systems, satellite and
            ground segment hardware, and electromechanical assemblies.
          </p>

          <p className="text-gray-700 leading-relaxed animate-fadeInUp delay-200">
            Our teams support{" "}
            <span className="font-semibold text-gray-900">
              end-to-end delivery
            </span>{" "}
            — from design reviews and compliance to spares management and
            lifecycle support — so customers can deploy with confidence across
            <span className="text-yellow-600 font-medium">
              {" "}
              Aviation, Defence, Railways, Space
            </span>
            , and more.
          </p>

          <p className="text-gray-700 leading-relaxed sm:hidden animate-fadeInUp delay-300">
            Engineering partner across
            <span className="text-yellow-600 font-medium">
              {" "}
              Aviation, Defence, Railways
            </span>
            , and
            <span className="text-yellow-600 font-medium"> Space</span> —
            delivering rugged electronics, electromechanical builds, and
            lifecycle support with a
            <span className="font-semibold text-gray-900"> quality-first</span>,
            compliance-driven approach.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-75 { animation-delay: 0.075s; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}
