import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-blue-50 text-blue-900 py-20"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Request Innovation / Contact Us
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Have a project in mind, need a custom solution, or want to explore
            innovation with us? Fill out the form below and we’ll get back to
            you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-blue-100 hover:shadow-blue-200 transition duration-500">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
              transition-all duration-300 hover:shadow-md"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
              transition-all duration-300 hover:shadow-md"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
              transition-all duration-300 hover:shadow-md"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Project / Inquiry Type"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
              transition-all duration-300 hover:shadow-md"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-medium">
              Message / Request
            </label>
            <textarea
              rows="5"
              placeholder="Describe your project, requirements, or request..."
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
              transition-all duration-300 hover:shadow-md"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
              text-white font-semibold px-10 py-3 rounded-xl shadow-md transition-all duration-300 
              transform hover:scale-105 hover:shadow-xl"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
