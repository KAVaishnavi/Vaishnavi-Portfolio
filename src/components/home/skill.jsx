"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaMicrochip,
  FaCuttlefish,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "VLSI", icon: <FaMicrochip className="text-purple-500" /> },
  { name: "C Programming", icon: <FaCuttlefish className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Embedded System", icon: <FaMicrochip className="text-gray-300" /> },
  { name: "REST API", icon: <SiPostman className="text-orange-400" /> },
  { name: "Signal and System", icon: <FaMicrochip className="text-pink-400" /> },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 bg-[#0a1a3c] overflow-hidden">
      {/* 🔮 Floating gradient blobs (same as Hero) */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* 💫 Content */}
      <motion.div
        className="relative max-w-5xl w-full text-center z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="mt-24 text-4xl md:text-5xl font-extrabold text-white mb-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-cyan-500/30 hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="text-4xl mb-3 drop-shadow-lg">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-100">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🔁 Blob animation styles */}
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

export default Skills;
