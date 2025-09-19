import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-white text-blue-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Request Innovation / Contact Us
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Have a project in mind, need a custom solution, or want to explore
            innovation with us? Fill out the form below and we’ll get back to
            you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-8 rounded-2xl shadow-lg">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Project / Inquiry Type"
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
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
              className="px-4 py-3 rounded-lg border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
