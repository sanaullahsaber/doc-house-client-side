import React, { useState } from 'react';

import navImg from "../../../assets/nav/nav.png"

import './Navbar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    <div className="bg-[#07332F] ">
      <nav className="max-w-screen-2xl mx-auto pt-5">
        {/* 1st start */}
        <div className="max-w-full mx-auto px-4 py-2 sm:px-12 lg:px-24">
          {/* 2nd start */}
          <div className="flex items-center justify-between h-16 ">
            {/* 3rd start */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="text-white font-bold text-xl flex justify-center items-center"
                >
                  <img
                    className="mr-2 w-9 h-9 sm:h-[61px] sm:w-[61px]"
                    src={navImg}
                    alt="Doc House Logo"
                  />
                  <p>
                    <span className="text-[#F7A582] mr-2">Doc</span>House
                  </p>
                </Link>
              </div>
              {/* 3rd end */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white px-3 py-2 rounded-md  font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white px-3 py-2 rounded-md font-medium"
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className="text-white px-3 py-2 rounded-md font-medium"
                >
                  Appointment
                </Link>
                <Link
                  to="/about"
                  className="text-white px-3 py-2 rounded-md  font-medium"
                >
                  Login
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* 2nd end */}
          </div>
          {/* 1st end */}
        </div>

        {/* small screen   */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white px-3 py-2 rounded-md font-medium"
            >
              About
            </Link>
            <Link
              to="/about"
              className="text-white px-3 py-2 rounded-md  font-medium"
            >
              Appointment
            </Link>
            <Link
              to="/about"
              className="text-white px-3 py-2 rounded-md font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;