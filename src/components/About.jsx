import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/aboutimage.jpg"
            alt="About Us"
            className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
          />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fadeInUp">
            About Us
          </h2>

          <p className="text-gray-700 leading-relaxed animate-fadeInUp delay-100">
            Appah Innovations Pvt. Ltd. engineers reliable, rugged solutions for
            demanding environments. We design and build avionics and
            mission-critical electronics, rail control systems, satellite and
            ground segment hardware, and electromechanical assemblies.
          </p>

          <p className="text-gray-700 leading-relaxed animate-fadeInUp delay-200">
            Our teams support end-to-end delivery—from design reviews and
            compliance to spares management and lifecycle support—so customers
            can deploy with confidence across Aviation, Defence, Railways,
            Space, and more.
          </p>

          <p className="text-gray-700 leading-relaxed sm:hidden animate-fadeInUp delay-300">
            Engineering partner across Aviation, Defence, Railways, and
            Space—delivering rugged electronics, electromechanical builds, and
            lifecycle support with a quality-first, compliance-driven approach.
          </p>
        </div>
      </div>
    </section>
  );
}
