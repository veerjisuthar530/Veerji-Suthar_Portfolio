// ...existing code...
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./index.css"; // ensure index.css is imported
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import AboutMe from "./Components/AboutMe/About.jsx";
import Services from "./Components/Services/Services.jsx";
import MySkills from "./Components/MySkills/MySkills.jsx";
import Project from "./Components/Projects/Project.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [isDark, setIsDark] = useState(true); // default dark

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-400"></div>
      </div>
    );
  }

  return (
    <>
      <div className="site-bg min-h-screen text-site transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <AboutMe />
        <Services />
        <MySkills />
        <Project />
        <ContactUs />
        <Footer />
        
        {/* Scroll To Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-400 transition z-50 animate-bounce"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
// ...existing code...