// src/components/Services.jsx
import React from "react";
import { FaRobot, FaCode, FaBullseye } from "react-icons/fa";

const services = [
  {
    icon: <FaRobot size={40} className="text-blue-600" />,
    title: "Automation",
    description:
      "Automate repetitive tasks, workflows, and operations to save time and increase efficiency.",
  },
  {
    icon: <FaCode size={40} className="text-green-600" />,
    title: "Web Development",
    description:
      "Modern, responsive websites that reflect your brand and convert visitors into leads.",
  },
  {
    icon: <FaBullseye size={40} className="text-purple-600" />,
    title: "Lead Generation",
    description:
      "Get qualified leads for your business through personalized outreach and targeting.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-r from-black via-[#001233] to-black text-white py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Our <span className="text-blue-400">Services</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="bg-[#0f172a] border border-blue-800/40 p-6 rounded-xl shadow-md hover:shadow-blue-700 transition-shadow duration-700 ease-in-out"
            >
              <div className="mb-4 flex justify-center text-blue-400 text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
