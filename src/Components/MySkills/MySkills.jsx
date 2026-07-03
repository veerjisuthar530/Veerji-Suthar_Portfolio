import React from "react";
import { motion } from 'framer-motion';
import HTML from "../../assets/html.jpg";
import CSS from "../../assets/css.png";
import Tailwind from "../../assets/twailand.jpg";
import JavaScript from "../../assets/javascript.png";
import ReactIcon from "../../assets/React.jpg";
import Figma from "../../assets/figma.png";
import Next from "../../assets/next.png";
import Node from "../../assets/Node.png";

export default function Skills() {
  const skills = [
    {
      name: "HTML - 5",
      level: 90,
      icon: HTML,
    },
    {
      name: "CSS - 3",
      level: 80,
      icon: CSS,
    },
    {
      name: "Tailwind CSS",
      level: 80,
      icon: Tailwind,
    },
    {
      name: "Java Script",
      level: 60,
      icon: JavaScript,
    },
    {
      name: "React",
      level: 60,
      icon: ReactIcon,
    },
    {
      name: "Figma",
      level: 90,
      icon: Figma,
    },
    {
      name: "Next.js",
      level: 65,
      icon: Next,
    },
    {
      name: "Node.js",
      level: 70,
      icon: Node,
    },
  ];

  return (
    <div id="Myskills" className="py-16 flex flex-col items-center overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10"
      >
        My <span className="accent">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] max-w-6xl">
        {skills.map((skill, i) => (
          <motion.div 
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            key={i} className="flex items-center gap-5"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 object-contain rounded-full"
            />

            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-muted text-sm">{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
