import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("https://formspree.io/f/mblyewkq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Thanks! Your message has been sent.");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-black via-[#001233] to-black
 text-white py-0 ">
  <div className="bg-gradient-to-b from-transparent via-transparent to-black py-20">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in <span className="text-blue-400">Touch</span></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md border border-gray-300 text-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md border border-gray-300 text-gray-900"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md border border-gray-300 text-gray-900"
          />
          <button
            type="submit"
            smooth={true}
            duration={600}
            className="laser-button bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg cursor-pointer"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-green-600">{status}</p>}
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
