import React from "react";
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-sm text-gray-400 md:mb-0">
            Copyright © {currentYear} - SHEEN PREZZO. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-red-600"
            >
              <YoutubeIcon size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-blue-600"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-pink-600"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-blue-400"
            >
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
