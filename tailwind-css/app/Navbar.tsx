"use client";
import React, { useState } from "react";
import logo from "@/public/next.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative container mx-auto p-6">
      {/* <!-- Flex container --> */}
      <div className="flex items-center justify-between">
        {/* <!-- Logo --> */}
        <div className="pt-2">
          <Image src={logo} alt="Company Logo" width={50} height={50} />
        </div>
        {/* <!-- Menu Items --> */}
        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        {/* <!-- Button --> */}
        <a
          href="#"
          className="hidden p-3 px-6 pt-2 text-white bg-red-400 rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>

        {/* <!-- Hamburger Icon --> */}
        <button
          className="block hamburger md:hidden focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              Product
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              About Us
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              Careers
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              Community
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
