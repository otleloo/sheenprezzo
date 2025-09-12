"use client";

import React, { useEffect, useState } from "react";
import { YoutubeIcon, MenuIcon, XIcon } from "lucide-react"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false); 
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full py-4 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-black"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold text-white">SHEEN PREZZO</div>
        <div className="hidden items-center space-x-8 md:flex">
          <button
            onClick={() => scrollToSection("home")}
            className="font-medium text-white hover:text-gray-300"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-medium text-white hover:text-gray-300"
          >
            ABOUT ME
          </button>
          <button
            onClick={() => scrollToSection("videos")}
            className="font-medium text-white hover:text-gray-300"
          >
            VIDEOS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium text-white hover:text-gray-300"
          >
            CONTACT
          </button>
        </div>
        <div className="flex items-center space-x-4"> 
          <a
            href="https://www.youtube.com/@sheenprezoo911/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 rounded bg-red-600 px-4 py-1 text-white transition-colors hover:bg-red-700"
          >
            <YoutubeIcon size={16} />
            <span>Subscribe</span>
          </a>
          <div className="md:hidden"> 
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-white text-2xl font-medium hover:text-gray-300"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white text-2xl font-medium hover:text-gray-300"
          >
            ABOUT ME
          </button>
          <button
            onClick={() => scrollToSection("videos")}
            className="text-white text-2xl font-medium hover:text-gray-300"
          >
            VIDEOS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white text-2xl font-medium hover:text-gray-300"
          >
            CONTACT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;