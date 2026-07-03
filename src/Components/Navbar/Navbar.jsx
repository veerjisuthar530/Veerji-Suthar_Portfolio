import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/logo.png';
import profilePic from '../../assets/Hero.jpg';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const activeSection = useScrollSpy(['home', 'about', 'projects', 'services', 'Myskills', 'contact'], 100);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="sticky top-0 z-50 site-panel bg-opacity-80 backdrop-blur-md border-b border-subtle transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo (left) */}
          <div className="flex-shrink-0 flex items-center px-8">
            <img src={logo} alt="logo" width={60} height={50} />
          </div>

          {/* Mobile: Profile + Menu Button (right) */}
          <div className="flex items-center space-x-3 sm:hidden ml-auto">
            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full ">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover rounded-full bg-neutral-800"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-accent transition"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:ml-6 sm:items-center sm:justify-center flex-1">
            <div className="flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'projects', label: 'Projects' },
                { id: 'services', label: 'Services' },
                { id: 'Myskills', label: 'My Skills' },
                { id: 'contact', label: 'Contact Me' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-accent bg-accent/10'
                      : 'text-muted hover:bg-white/5 hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Theme Toggle (Desktop) */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted hover:text-accent transition rounded-full hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden site-panel border-t border-subtle">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Me' },
              { id: 'projects', label: 'Projects' },
              { id: 'services', label: 'Services' },
              { id: 'Myskills', label: 'My Skills' },
              { id: 'contact', label: 'Contact Me' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  activeSection === item.id
                    ? 'text-accent bg-accent/10'
                    : 'text-muted hover:bg-white/5 hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
