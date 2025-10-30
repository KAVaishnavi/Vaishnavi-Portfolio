"use client";

import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"  // 👈 Add this line for smooth scroll target
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-[#0a1a3c] text-white"
    >
      {/* 🔥 Floating gradient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* ✉️ Contact Form */}
      <div className="relative max-w-3xl w-full text-center animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-8">
          Got a project idea or just want to say hello? Fill out the form below
          or reach out via email.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-600 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-600 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-600 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg text-lg transform hover:scale-105 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-300">
          <p>
            Email:{" "}
            <a
              href="mailto:kavaishnavi2020@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              kavaishnavi2020@gmail.com
            </a>
          </p>
          <p>📍 Location: Mumbai, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
