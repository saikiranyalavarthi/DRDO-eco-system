import React from "react";

export default function Impact() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 text-blue-900 py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Video/Image Tile */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
          <img
            src="/images/globe.jpg" // Replace with your image or video thumbnail
            alt="More Videos"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/20 group-hover:bg-blue-900/40 transition duration-500">
            {/* Play Button */}
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-40"></div>
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 text-3xl font-bold shadow-lg">
                ▶
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold text-blue-900">
              More Videos
            </p>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 border-t-4 border-yellow-400">
            <h3 className="text-4xl font-bold text-blue-900">25+</h3>
            <p className="mt-2 text-sm text-blue-700">
              Years of Industry Experience
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 border-t-4 border-yellow-400">
            <h3 className="text-base font-bold text-blue-900 leading-relaxed">
              ISO 9001:2015 <br /> AS 9100:2016 <br /> BIS, CE, RoHS
            </h3>
            <p className="mt-2 text-sm text-blue-700">Certifications</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 border-t-4 border-yellow-400">
            <h3 className="text-4xl font-bold text-blue-900">20+</h3>
            <p className="mt-2 text-sm text-blue-700">Awards & Recognition</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 border-t-4 border-yellow-400">
            <h3 className="text-4xl font-bold text-blue-900">100+</h3>
            <p className="mt-2 text-sm text-blue-700">
              Custom Products & Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
