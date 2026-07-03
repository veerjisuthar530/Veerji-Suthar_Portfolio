import { ArrowUpIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#192A46] py-6 px-6 flex items-center justify-between">
      
      {/* COPYRIGHT TEXT */}
      <p className="text-gray-300 text-sm md:text-base">
        Copyright © 2024 All Rights Reserved By RIEAD.
      </p>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="
          border border-cyan-400 p-2 rounded-md 
          hover:bg-cyan-400 hover:text-black 
          transition-all duration-300
        "
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    </footer>
  );
}
