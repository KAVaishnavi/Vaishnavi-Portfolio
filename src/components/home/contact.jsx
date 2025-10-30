"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Your WhatsApp number in international format
  const whatsappNumber = "918879122339";

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    // Format the message text
    const text = `Hello, I'm ${name}.%0AEmail: ${email}%0A%0A${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Open WhatsApp chat in new tab or mobile app
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-[#0a1a3c]">
      {/* 🔵 Floating gradient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <motion.div
        className="relative max-w-3xl w-full text-center bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Got a project idea or just want to say hello? Fill out the form below
          or reach out via WhatsApp.
        </motion.p>

        {/* ✉️ Contact Form */}
        <motion.form
          onSubmit={handleWhatsAppSend}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>

          {/* WhatsApp Send Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition duration-300"
          >
            Send Message  💬
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-10 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>
            ✉️ Email:{" "}
            <a
              href="mailto:kavaishnavi2020@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              kavaishnavi2020@gmail.com
            </a>
          </p>
          <p>📍 Location: Mumbai, India</p>
        </motion.div>
      </motion.div>

      {/* 🔁 Blob Animation Keyframes */}
      <style jsx>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
