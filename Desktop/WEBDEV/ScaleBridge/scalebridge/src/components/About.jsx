// src/components/About.jsx
import React from "react";
import aboutImage from "../assets/pro.jpg";


const About = () => {
  return (
    // <section id="about" className="bg-white py-20 px-6">
    // <section id="about" className="bg-[#000] text-white py-20">
//     <section id="about" className="bg-gradient-to-r from-black via-gray-800 to-[#001233]
//  text-white py-20">
    <section id="about" className="bg-gradient-to-r from-black via-[#001233] to-black
 text-white py-0 ">
      <div className=" bg-gradient-to-b from-black via-transparent to-transparent z-10 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">About ScaleBridge</h2> */}
          <h2 className="text-4xl font-bold  mb-4">About <span className="text-blue-400">ScaleBridge</span></h2>
          {/* <p className="text-gray-700 text-lg leading-relaxed"> */}
          <p className=" text-lg leading-relaxed">
            ScaleBridge helps UK & US businesses grow by connecting them with top-tier,
            affordable digital service providers from across the globe. From automation and
            web development to lead generation — we bridge the gap so your business scales faster.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="Team working"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
      </div>
    </section>

  );
};

export default About;
