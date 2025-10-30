"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const education = [
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "ST Joseph Engineering College",
      year: "2020 - 2024",
    },
    {
      degree: "Higher Secondary School",
      institution: "Pornaprajna PU College",
      year: "2018 - 2020",
    },
  ];

  const experience = [
    {
      role: "Full Stack Intern" ,
      company: "Nexcore Alliance LLP",
      year: "05/2025 - Present",
      desc: "Worked as intern in the company",
    },
    {
      role: "CSA executive ",
      company: "IDBI Bank ",
      year: "11/2024 -06/2025" ,
      desc: "Worked as customer executive in bank",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-8 py-16 flex flex-col items-center">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.img
          src="/profile.jpg" // 🔹 Replace with your image in /public folder
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-purple-500 object-cover"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.h1
          className="text-4xl font-bold mt-6 text-purple-400"
          whileHover={{ scale: 1.05 }}
        >
          Hi, I’m Vaishnavi 👋
        </motion.h1>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A passionate <span className="text-purple-400 font-semibold">Frontend Developer</span> 
          with a love for crafting visually appealing, interactive, and responsive web applications.
          I enjoy turning ideas into digital experiences through clean and efficient code.
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-6 border-l-4 border-purple-400 pl-3">
          🎓 Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-sm text-purple-300">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-6 border-l-4 border-purple-400 pl-3">
          💼 Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm text-purple-300">{exp.year}</p>
              <p className="mt-2 text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-20 text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Vaishnavi 💜
      </motion.div>
    </div>
  );
}
