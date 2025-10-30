"use client";

import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 bg-[#0a1a3c] text-white">
      {/* 🔮 Floating glowing blobs (same as Hero) */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* 🌟 Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10">
        {/* 🧠 Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            As an{" "}
            <span className="font-semibold text-cyan-300">E&amp;C engineer</span>{" "}
            with leadership qualities and strong communication abilities, I aim
            to leverage my technical expertise in{" "}
            <span className="font-semibold text-white">
              electronics and communication engineering
            </span>{" "}
            to contribute to innovative projects and foster professional growth.
          </motion.p>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Additionally, with skills in{" "}
            <span className="font-semibold text-white">
              Full Stack Web Development (MERN stack)
            </span>
            , I'm passionate about building scalable, user-friendly web
            applications through problem-solving and writing clean code. I seek
            opportunities for{" "}
            <span className="font-semibold text-cyan-400">
              learning, advancement, and contributing
            </span>{" "}
            to organizational growth.
          </motion.p>
        </motion.div>

        {/* 🧍‍♀️ Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.img
            src="/profile.jpg"
            alt="Vaishnavi Profile"
            className="w-[350px] h-[350px] rounded-2xl shadow-2xl object-cover border-4 border-cyan-400/40"
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 0 35px rgba(125, 211, 252, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* 🔁 Blob animations (same as Hero) */}
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

export default About;
