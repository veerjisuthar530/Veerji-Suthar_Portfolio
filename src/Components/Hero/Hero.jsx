import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import "./Hero.css";
import heroBg from "../../assets/Hero.jpg";
import SocialLinks from "./SocialLinks.jsx";
import CV from "../../assets/Veerji Suthar CV.pdf";

export default function Hero() {
  return (
    <section id="home" className="relative py-10 pt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
      </div>
      <div className="container mx-auto px-15 md:flex md:items-center md:justify-between md:flex-row-reverse gap-8">
        {/* Profile / avatar (right on md+) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-none w-full md:w-1/3 flex justify-center md:justify-end hidden md:flex"
        >
          <div className="relative">
            <div className="w-70 h-70 rounded-full bg-gradient-to-tr from-violet-500 via-pink-500 to-indigo-500 p-1 shadow-lg shadow-cyan-500/20">
              <img
                src={heroBg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full bg-neutral-800"
              />
            </div>
            <div className="absolute inset-0 rounded-full pointer-events-none blur-sm opacity-40"></div>
          </div>
        </motion.div>

        {/* Text content (left on md+) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-3xl md:w-2/3"
        >
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hi, I'm <span className="accent">Veerji Suthar</span>.
          </h1>
          <div className="mt-2 text-xl font-medium h-[30px]">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                1000,
                'React.js Developer',
                1000,
                'Next.js Developer',
                1000,
                'ASP.NET Core Developer',
                1000,
                'Problem Solver',
                1000,
                'Software Engineer',
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-muted"
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-muted max-w-2xl text-left text-sm md:text-base text-justify">
            I'm a Full-Stack Developer who loves turning ideas into powerful web applications. From crafting intuitive user interfaces with React.js and Next.js to developing secure backend services using Node.js and ASP.NET Core, I enjoy building complete solutions that are both functional and visually appealing. I'm passionate about continuous learning, solving complex problems, and creating digital experiences that make a difference.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center md:justify-start">
            <a
              href={CV}
              download
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md btn-accent transition hover:scale-105"
            >
              Download CV
            </a>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// ...existing code...
