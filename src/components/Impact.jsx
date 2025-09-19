import React from "react";

export default function Impact() {
  return (
    <section className="bg-white text-blue-900 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Video/Image Tile */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
          <img
            src="/images/globe.jpg" // Replace with your image or video thumbnail
            alt="More Videos"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/20 group-hover:bg-blue-900/30 transition">
            <div className="text-5xl mb-3 text-blue-900">▶</div>
            <p className="text-lg font-medium text-blue-900">More Videos</p>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-xl text-center shadow-md">
            <h3 className="text-3xl font-bold text-blue-900">25+</h3>
            <p className="mt-2 text-sm text-blue-800">
              Years of Industry Experience
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl text-center shadow-md">
            <h3 className="text-base font-bold text-blue-900">
              ISO 9001:2015 <br /> AS 9100:2016 <br /> BIS, CE, RoHS
            </h3>
            <p className="mt-2 text-sm text-blue-800">Certifications</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl text-center shadow-md">
            <h3 className="text-3xl font-bold text-blue-900">20+</h3>
            <p className="mt-2 text-sm text-blue-800">Awards & Recognition</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl text-center shadow-md">
            <h3 className="text-3xl font-bold text-blue-900">100+</h3>
            <p className="mt-2 text-sm text-blue-800">
              Custom Products & Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
