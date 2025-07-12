// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-sm w-full z-20
 text-white py-2 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ScaleBridge. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="mailto:ansonstephan@email.com" className="hover:underline hover:text-blue-400">
            Contact Us
          </a>
          <a href="https://www.linkedin.com/company/107907525/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://x.com/anson_stephan" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
