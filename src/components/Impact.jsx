import React from "react";

export default function Impact() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        {/* Video Tile */}
        <div className="md:col-span-2 bg-black rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-800 transition cursor-pointer">
          <div className="text-3xl mb-2">▶</div>
          <p className="text-center">More Videos</p>
        </div>
        {/* Stats Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:col-span-3">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">25+</h3>
            <p>Years of Industry Experience</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">ISO 9001, AS9100, CE</h3>
            <p>Certifications</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">20+</h3>
            <p>Awards & Recognition</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold">100+</h3>
            <p>Custom Products & Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
