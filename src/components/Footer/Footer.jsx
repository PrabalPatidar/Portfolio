import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 w-screen px-2 sm:px-4 md:px-8 overflow-x-hidden">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Prabal Patidar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            // { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
            { icon: <FaTwitter />, link: "https://x.com/PatidarPrabal?t=PwzKz_kbtCFAQ-7xGB0Sdw&s=08" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/prabal-patidar-8945ba231" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/prabal__patidar_801?utm_source=ig_web_button_share_sheet&igsh=dm50dG9kb2Z2d296" },
            // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Prabal Patidar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
