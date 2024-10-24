// components/Navbar.tsx
"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex items-center justify-between mx-auto px-3 py-2 lg:py-4">
        <h1 className="text-white text-4xl">Ahmed Yaqoob Dhedhi</h1>

        <button
          className="text-white lg:hidden focus:outline-none hover:bg-gray-600 rounded p-2"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`lg:flex lg:space-x-6 lg:text-white lg:text-2xl lg:static lg:opacity-100 lg:bg-transparent ${
            navbarOpen
              ? "grid bg-[#121212] text-white space-y-4 py-4 place-content-center"
              : "hidden"
          } lg:space-y-0 lg:flex-row absolute top-12 left-0 right-0 z-20`}
        >
          <Link href="/" className="block px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="#about" className="block px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="#contact" className="block px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
