"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Eco Habit Tracker",
    description:
      "A full-stack web app built with MERN stack to track eco-friendly habits, visualize progress, and earn rewards.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/KAVaishnavi",
    
  },
  {
    title: "LibraryBook",
    description:
      "A library management system with book search, authentication, and admin panel built using Next.js and Express.",
    tech: ["Next.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/KAVaishnavi",
    demo: "https://librarybook-lilac.vercel.app/",
    
  },
  {
    title: "Job Portal",
    description:
      "A sleek job portal with authentication, job listings, and dashboard built using modern web tech.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/KAVaishnavi",
    
  },
  {
    title: "Weather App",
    description:
      "Real-time weather forecasting app using OpenWeather API and a clean UI built with Next.js.",
    tech: ["Next.js", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/KAVaishnavi",
   demo: "https://weather-appp-seven.vercel.app/",
  },
  {
    title: "Gallery",
    description:
      "A responsive photo gallery built with Next.js and Cloudinary to manage and showcase images.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/KAVaishnavi",
    demo:"https://gallery-theta-dusky.vercel.app/",
    
  },
  {
    title: "Task- managment",
    description:
      "A task management app to organize and prioritize tasks effectively.",
    tech: ["Next.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/KAVaishnavi",
    demo: "https://task-management-fawn-five.vercel.app/",
    
  },
  {
    title: "Smart Walking Stick with GPS",
    description:
      "An innovative smart walking stick equipped with GPS and obstacle detection for visually impaired users.",
    tech: ["Raspberry Pi", "Ultrasonic Sensors", "GPS Module"],
    github: "https://github.com/KAVaishnavi",
  },
  {
    title: "Health Monitoring System",
    description:
      "IoT-based health monitoring system using Raspberry Pi to track vital signs in real-time.",
    tech: ["Arduino", "Heart Rate Sensor", "Temperature Sensor"],
    github: "https://github.com/KAVaishnavi",
  },
  {
    title: "Issue-tracker",
    description:
      "A issue tracker is made to note down the issues, and also to complete it on the bases on problem effect.",
    tech: ["Next.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/KAVaishnavi",
    
  },

];

const Projects = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden bg-[#0a1a3c] text-white">
      {/* 🔮 Floating gradient blobs (same as Hero) */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* ✨ Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* ✨ Projects Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-cyan-500/30 transition transform hover:scale-105 flex flex-col justify-between border border-white/20"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-white/20 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 text-xl transition"
              >
                <FaGithub />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 text-xl transition"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔁 Animation styles */}
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

export default Projects;
