"use client";
import React from "react";
import Header from "../header";
import Footer from "../footer";

export const ContactForm: React.FC = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/dark-sky.jpeg)",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Form Container */}
      <div className="flex-grow flex items-center justify-center mt-24 mb-24">
        <div className="w-full max-w-3xl p-8 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-xl">
          <h1 className="text-3xl text-white font-semibold text-center mb-8">
            Contact Us Form
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-yellow-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 bg-transparent border-b border-gray-400 text-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-yellow-600">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 bg-transparent border-b border-gray-400 text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Email and Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-yellow-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-transparent border-b border-gray-400 text-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-yellow-600">
                  Mobile
                </label>
                <input
                  type="text"
                  placeholder="Mobile"
                  className="p-3 bg-transparent border-b border-gray-400 text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-bold text-yellow-600">
                Type Your Message Here...
              </label>
              <textarea
                placeholder="Type Your Message Here..."
                className="p-3 bg-transparent border-b border-gray-400 text-white focus:outline-none"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-bold rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default ContactForm;
