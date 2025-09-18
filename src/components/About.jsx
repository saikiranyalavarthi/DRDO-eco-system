import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container  px-4 text-center md:text-left max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-2">
          Appah Innovations Pvt. Ltd. engineers reliable, rugged solutions for
          demanding environments. We design and build avionics and mission
          critical electronics, rail control systems, satellite and ground
          segment hardware, and electromechanical assemblies.
        </p>
        <p className="text-gray-700">
          Our teams support end-to-end delivery—from design reviews and
          compliance to spares management and lifecycle support—so customers can
          deploy with confidence across Aviation, Defence, Railways, Space, and
          more.
        </p>
      </div>
    </section>
  );
}
