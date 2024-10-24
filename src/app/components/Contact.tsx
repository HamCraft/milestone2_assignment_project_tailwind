// components/Contact.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen text-white py-16 bg-slate-700">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-400 mb-10">
            I&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center mb-2">
          <p className="text-gray-300 mb-2">You can reach me via email at:</p>
          <a href="mailto:dhedhiahmedyaqoob@gmail.com" className="text-blue-400 lg:text-4xl md:text-2xl sm:text-1xl hover:underline hover:text-cyan-800">
            dhedhiahmedyaqoob@gmail.com
          </a>
          <p className="text-gray-300 mt-6">Or connect with me on social media:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/ahmed-yaqoob-dhedhi/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin-logo.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="transition duration-300 ease-in-out hover:scale-110 lg:w-16 lg:h-16 md:w-10 md:h-10"
              />
            </a>
            <a href="https://github.com/HamCraft" target="_blank" rel="noopener noreferrer">
              <Image
                src="/github-logo.png"
                alt="GitHub"
                width={40}
                height={40}
                className="transition duration-300 ease-in-out hover:scale-110 lg:w-16 lg:h-16 md:w-10 md:h-10"
              />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-6">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-[#1E1E1E] border border-gray-600 text-white focus:outline-none focus:border-blue-400"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-[#1E1E1E] border border-gray-600 text-white focus:outline-none focus:border-blue-400"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 rounded bg-[#1E1E1E] border border-gray-600 text-white focus:outline-none focus:border-blue-400"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
