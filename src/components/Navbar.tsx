"use client";

import React, { useEffect, useState } from 'react';
import { YoutubeIcon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-black'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl">SHEEN PREZZO</div>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 font-medium">
            HOME
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 font-medium">
            ABOUT ME
          </button>
          <button onClick={() => scrollToSection('videos')} className="text-white hover:text-gray-300 font-medium">
            VIDEOS
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 font-medium">
            CONTACT
          </button>
        </div>
        <a href="https://www.youtube.com/channel/sheenprezoo911" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-1 rounded flex items-center space-x-1 hover:bg-red-700 transition-colors">
          <YoutubeIcon size={16} />
          <span>Subscribe</span>
        </a>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
