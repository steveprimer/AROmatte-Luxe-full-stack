// src/components/Hero.jsx
import React from "react";
import { Link } from "react-scroll";
import heroVideo from "../assets/heroVideo.mp4";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-30 backdrop-blur-sm fixed w-full z-30"
>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">ScaleBridge</h1>
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              activeClass="active"
              className="hover:text-blue-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              activeClass="active"
              className="hover:text-blue-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              activeClass="active"
              className="hover:text-blue-400 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
              activeClass="active"
              className="hover:text-blue-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Grow Your Business with <span className="text-blue-400">ScaleBridge</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We connect UK & US businesses with world-class digital services.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          className="laser-button bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg cursor-pointer"
        >
          Get Started
        </Link>

      </div>
    </section>
  );
};

export default Hero;
// export { Navbar, Hero };