// ...existing code...
import React from "react";
import { motion } from 'framer-motion';
import Aboutus from "../../assets/Hero.jpg"; // replace with your image path

export default function AboutMe() {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row items-start gap-20 px-15 py-15 lg:px-24 py-16 overflow-hidden">
      {/* LEFT SIDE IMAGE */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0 mt-20"
      >
        {/* decorative blocks */}
        <div className="absolute -left-6 top-10 w-6 h-56 bg-gray-800 rounded"></div>
        <div className="absolute -bottom-6 left-10 w-56 h-6 bg-gray-800 rounded"></div>

        <img
          src={Aboutus} /* put your image at public/images/profile.jpg */
          alt="Profile"
          className="relative w-72 h-96 object-cover rounded-xl shadow-2xl border border-gray-800"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-2/3"
      >
       <h2 className="text-3xl font-bold mb-10 mt-0 md:col-span-2">
          About <span className="accent">Me</span>
        </h2>

        <h2 className="text-3xl font-bold mb-6">
          Curious about me? Here you have it.
        </h2>

        <div className="space-y-6 text-muted leading-relaxed font-[Inter] justify-start text-justify">
          <p>
            I'm a passionate <strong>Software Engineering student</strong> and <strong>Full-Stack Developer</strong> dedicated to building modern, scalable, and user-friendly web applications. I enjoy transforming ideas into real-world digital solutions by combining clean design, efficient code, and strong problem-solving skills. My expertise includes <strong>React.js, Next.js, Node.js, ASP.NET Core, JavaScript, HTML5, CSS3, Tailwind CSS, C#, and SQL Server</strong>.
          </p>

          <p>
            I completed a 2-month React.js internship at <strong>Zero Vertical Lab</strong>, where I contributed to real-world applications and strengthened my frontend development experience.
          </p>

          <p>
            As a Software Engineering student, I've developed a solid understanding of <strong>software design principles, object-oriented programming, data structures, algorithms, databases, software architecture, and the Software Development Life Cycle (SDLC)</strong>. I believe that great software is built through thoughtful planning, clean architecture, collaboration, and continuous improvement.
          </p>

          <p>
            I enjoy working across the entire development lifecycle—from gathering requirements and designing intuitive user interfaces to developing secure backend services, integrating databases, testing applications, and deploying reliable solutions. Every project is an opportunity to learn, innovate, and create meaningful experiences that solve real-world problems.
          </p>

          <p>
            I'm constantly exploring new technologies, improving my technical skills, and following industry best practices to build applications that are fast, responsive, secure, and maintainable. My goal is to grow as a software engineer while contributing to impactful projects and collaborating with teams that value innovation, quality, and continuous learning.
          </p>

          <p className="font-semibold">
            "Code with purpose, build with passion, and never stop learning."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
// ...existing code...
