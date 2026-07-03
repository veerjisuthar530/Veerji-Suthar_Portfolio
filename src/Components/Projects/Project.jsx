import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import WebDesign from "../../assets/webdesign.jpg";
import web from "../../assets/web.jpg";
import web1 from "../../assets/Website-Landing-Page-Design-Home-Page-scaled.jpg";
import web2 from "../../assets/website.jpg";
import web3 from "../../assets/photo-studio-photo-portfolio-creative-website-template.jpg";
import web4 from "../../assets/wedes.png";
import HeroProject from "../../assets/Class-Management.jpeg";
import NewsApp from "../../assets/News.jpeg";
import NetflixClone from "../../assets/Netflix_clone.jpeg";
import Educity from "../../assets/Educity.jpeg";


export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioItems = [
    // {
    //   title: "React Dashboard",
    //   image: WebDesign,
    //   category: "React",
    //   description: "Single-page dashboard built with React.js and Tailwind CSS for fast, responsive UI.",
    //   tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    //   highlight: true,
    // },
    // {
    //   title: "E‑Commerce App",
    //   image: web,
    //   category: "Full-Stack",
    //   description: "E-commerce platform using Next.js frontend and Node.js backend with payment integration.",
    //   tech: ["Next.js", "Node.js", "MongoDB"],
    // },
    // {
    //   title: "Landing Page",
    //   image: web1,
    //   category: "Frontend",
    //   description: "Marketing landing page optimized for performance and accessibility.",
    //   tech: ["HTML5", "CSS3", "Tailwind CSS"],
    // },
    // {
    //   title: "Business Portal",
    //   image: web2,
    //   category: "Backend",
    //   description: "Enterprise web portal built with ASP.NET Core and SQL Server for secure data handling.",
    //   tech: ["ASP.NET Core", "C#", "SQL Server"],
    // },
    // {
    //   title: "Photo Studio Site",
    //   image: web3,
    //   category: "UI/UX",
    //   description: "Creative portfolio site with polished UI/UX and image galleries.",
    //   tech: ["React.js", "Figma", "CSS"],
    // },
    // {
    //   title: "Portfolio Template",
    //   image: web4,
    //   category: "Template",
    //   description: "Reusable portfolio template showcasing components and design systems.",
    //   tech: ["React.js", "Tailwind CSS"],
    // },
    {
      title: "Class Hub",
      image: HeroProject,
      category: "UI/UX",
      description: "Modern academic performance dashboard with signup flow and polished interface.",
      tech: ["React.js", "CSS", "Node.js", "SQL lite"],
      github: "https://github.com/veerjisuthar530/Class-Hub",
    },
    {
      title: "NewsApplication",
      image: NewsApp,
      category: "Web Dev",
      description: "Modern academic performance dashboard with signup flow and polished interface.",
      tech: ["React.js", "CSS", "Node.js"],
      github: "https://github.com/veerjisuthar530/New_app",
    },
    {
      title: "Netflix Clone",
      image: NetflixClone,
      category: "Web Design",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/veerjisuthar530/NetFlix_clone"
    },
    {
      title: "Educity Website",
      image: Educity,
      category: "Web Dev",
      description: "Modern academic performance dashboard with signup flow and polished interface.",
      tech: ["React.js", "CSS", "React Router", "Responsive design"],
      github: "https://github.com/veerjisuthar530/edusity",
    }
  ];

  const filters = ['All', 'Web Design', 'Web Dev', 'UI/UX'];

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  return (
    <div id="projects" className="py-16 flex flex-col items-center overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8"
      >
        My <span className="accent">Projects</span>
      </motion.h2>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-accent text-white shadow-lg shadow-cyan-500/30'
                : 'btn-outline hover:border-accent hover:text-accent'
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] max-w-6xl">
        <AnimatePresence>
          {filteredItems.map((item, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              key={item.title + i}
              className={`relative rounded-xl overflow-hidden shadow-lg group site-panel border border-subtle
                ${item.highlight ? "border-accent" : ""}`}
            >
            {/* Image */}
            <img
              src={item.image}
              alt="portfolio"
              className="w-full h-52 object-cover group-hover:scale-110 duration-300"
            />

            {/* Hover Overlay */}
            {item.title && (
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex flex-col justify-center items-center text-white p-4 opacity-100">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <span className="text-sm text-cyan-200 mb-2">{item.category}</span>
                {item.description && <p className="text-xs max-w-[80%] text-center mb-3">{item.description}</p>}
                {item.tech && (
                  <div className="flex gap-2 flex-wrap justify-center mb-3">
                    {item.tech.map((t, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded-full">{t}</span>
                    ))}
                  </div>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-xs text-white border border-white/20 hover:bg-white/20 transition mb-3"
                  >
                    View on GitHub
                  </a>
                )}
                <svg
                  className="w-8 h-8 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 3H17v4.1l-2.2-2.2-6.6 6.6-1.4-1.4 6.6-6.6L12.9 3zM3 5h6v2H5v8h8v-4h2v6H3V5z" />
                </svg>
              </div>
            )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
